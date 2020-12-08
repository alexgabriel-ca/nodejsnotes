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

/*Regular function*/
//const square = function (x) {
//	console.log('Synchronous function')
//	return x * x;
//};

/*Arrow function.  Use this syntax when executing multiple statements.*/
//const square = (x) => {
//	console.log('Aynchronous function used with multiple statements')
//	return x * x;
//};

/*Arrow function.  Use this syntax when executing one statement.*/
//const square = (x) => x * x;

//console.log(square(4));

const event = {
	name: 'birthday party',
	guestList: ['Alex', 'Joanna', 'Iva'],
	printGuestList() {
		console.log('Guest list for ' + this.name);
		this.guestList.forEach((guest) => {
			console.log(guest + " is attending " + this.name);
		});
	}
};
event.printGuestList();