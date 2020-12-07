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

/*Create new person object.*/
const person = {
	"name": "Alex",
	"planet": "Earth",
	"age": 43
};
/*Convert the object to JSON format*/
const personJSON = JSON.stringify(person);
/*Write JSON to a file*/
fs.writeFileSync('1-json.json', personJSON);
/*Read the content of the file*/
const dataBuffer = fs.readFileSync('1-json.json');
/*Convert the buffer into a string*/
const dataJSON = dataBuffer.toString();
/*Convert the string into an object*/
const data = JSON.parse(dataJSON);
/*Access the object's name and age property*/
console.log("The person's name is " + data.name + " and they are " + data.age + " years old");