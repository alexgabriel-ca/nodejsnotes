const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
	const notes = loadNotes();
};

const createNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => note.title === title);

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

const readNote = (title) => {
	const notes = loadNotes();
};

const updateNote = function (title, body) {
};

const deleteNote = (title) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => note.title !== title);
	saveNotes(duplicateNotes);

	if (notes.length > duplicateNotes.length) {
		console.log(chalk.greenBright('Note removed'));
	} else {
		console.log(chalk.redBright('Note not found'));
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
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