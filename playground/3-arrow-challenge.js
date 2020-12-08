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

// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {

	tasks: [{
			text: 'Grocery shopping',
			completed: true
		}, {
			text: 'Clean yard',
			completed: false
		}, {
			text: 'Film course',
			completed: false
		}],
	getTasksToDo() {
		return this.tasks.filter((task) => task.completed === false);
	}
};

console.log(tasks.getTasksToDo());