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