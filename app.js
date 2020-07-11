const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//version
yargs.version('1.1.0')

// add command
yargs.command({
  command:'add',
  describe:'Add Notes',
  builder:{
    title:{
      describe:'Title of Note',
      demandOption:true,
      type:'string',
    },
    body:{
      describe:'Body of Note',
      demandOption:true,
      type:'string',
    }

  },
  handler: (argv)=>{
    notes.addNotes(argv)
  }
})

// remove command
yargs.command({
  command:'remove',
  describe:'Remove Notes',
  builder:{
    title:{
      describe:'Title of note to remove',
      demandOption:true,
      type:'string'
    }
  },
  handler: (argv)=>{
  notes.removeNotes(argv.title)
  }
})

// list command
yargs.command({
  command:'list',
  describe:'List Notes',
  handler: ()=>{
    listNodes();
  }
})

// read command
yargs.command({
  command:'read',
  describe:'Read Notes',
  builder: {
    title:{
      describe:'Title of Note',
      demandOption:true,
      type:'string',
    }
  },
  handler: (argv)=>{
notes.readNotes(argv.title)
  }
})

yargs.parse()
