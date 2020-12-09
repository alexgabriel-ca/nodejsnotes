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