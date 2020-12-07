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

const fs = require('fs');
const chalk = require('chalk');

const listNotes = function () {
	const notes = loadNotes();
};

const createNote = function (title, body) {
	const notes = loadNotes();
	const duplicateNotes = notes.filter(function (note) {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.greenBright('Note saved'));
	} else {
		console.log(chalk.redBright('Note title taken, please choose a different title.'));
	}

	saveNotes(notes);
};

const readNote = function (title) {
	const notes = loadNotes();
};

const updateNote = function (title, body) {
};

const deleteNote = function (title) {
	const notes = loadNotes();
	const duplicateNotes = notes.filter(function (note) {
		return note.title !== title;
	});
	saveNotes(duplicateNotes);

	if (notes.length > duplicateNotes.length) {
		console.log(chalk.greenBright('Note removed'));
	} else {
		console.log(chalk.redBright('Note not found'));
	}
};

const saveNotes = function (notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	createNote: createNote,
	readNote: readNote,
	updateNote: updateNote,
	deleteNote: deleteNote,
	listNotes: listNotes
};