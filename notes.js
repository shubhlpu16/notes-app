const fs = require( 'fs');
const chalk = require('chalk');

addNotes=(argv)=>{
  const notes=loadNotes()
  const duplicates=notes.find(note=>note.title===argv.title)

  if(!duplicates)
  {
 notes.push({
  title:argv.title,
  body:argv.body,
})
  saveNotes(notes)
  console.log(chalk.green.inverse.bold('Note Title is Added!' ));
}
else {
  console.log(chalk.red.inverse.bold('Note Title is Taken!'));
}
}

removeNotes=title=>{
  let notes=loadNotes()
  notes=notes.filter(note=>note.title!==title)
  if(notes.length)
  {
    saveNotes(notes)
  console.log(chalk.green.inverse.bold('Note Title is Removed!' ));
}

console.log(chalk.red.inverse.bold('Note Title Not Found!'));

}

listNodes=()=>{
  const notes=loadNotes()
  if(notes.length===0)
  {
    console.log(chalk.red.inverse.bold("No Notes are there"));
  }
  else {

    console.log(chalk.yellow.bold('Your Notes'));
    console.log()
    notes.forEach((note,index)=>{
      console.log(chalk.magenta.bold(`${index+1}=> ${note.title}`));
    })
      console.log()
    console.log(chalk.yellow.bold('***********'));
  }
}

readNotes=title=>{
  const notes=loadNotes();
  const required = notes.find(note=>note.title===title)

  if(!required)
  {
    console.log(chalk.red.inverse.bold('Note Title Not Found!'));

  }
  else {
    console.log(chalk.magenta.bold('Title: ',required.title));
    console.log('Body: ',required.body);
  }
}

saveNotes=(notes)=>{
  const noteJson=JSON.stringify(notes)
  fs.writeFileSync('notes.json',noteJson)
}

loadNotes=()=>{
  try {
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJson=dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch (e) {
    return []
  }
}

module.exports={
  addNotes:addNotes,
  removeNotes:removeNotes,
  readNotes:readNotes,
  listNodes:listNodes,
};
