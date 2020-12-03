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

//Include file and assign value from includes.js variable to local variable.
const add = require("./includes.js");
//save reference to add function in the includes file into local variable with the same name
const getnotes = require("./notes.js");
//save reference to getNotes function in the includes file into local variable with the same name

console.log(add(5, 6));
//call add function defined using require
console.log(getnotes());
//call getnotes function defined using require