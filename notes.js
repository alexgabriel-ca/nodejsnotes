const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
	const notes = loadNotes();
	try {
		console.log(chalk.blueBright('Your Notes'));
		notes.forEach((note) => {
			console.log(note.title);
		})
	} catch (e) {
		console.log(e);
	}
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
	try {
		const selectedNote = notes.find((note) => note.title === title);
		if (selectedNote === undefined) {
			console.log(chalk.redBright("Note not found"));
		} else {
			console.log(chalk.blueBright("Title:\t")+selectedNote.title);
			console.log(chalk.blueBright("Body:\t")+selectedNote.body);
		}
	} catch (e) {
		console.log(e);
	}
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