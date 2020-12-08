/*
 * Copyright (C) 2020 Alex Gabriel <alex@alexgabriel.ca>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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
//console.log(yargs.argv);
yargs.parse();