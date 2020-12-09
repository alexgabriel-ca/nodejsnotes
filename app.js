/*Import libraries and files for use in the app*/
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const notes = require('./notes.js');

/*Configure yargs to work with the commands provided*/
yargs.command({
    command: 'create',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.createNote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});
yargs.command({
    command: 'update',
    describe: 'Update a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.updateNote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'delete',
    describe: 'Delete a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.deleteNote(argv.title);
    }
});
yargs.command({
    command: 'list',
    describe: 'List notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.listNotes();
    }
});
yargs.parse();