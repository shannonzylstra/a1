
let displayNumber, inputNumber

const clickPlus = e => {
	// grab the value to increment from the DOM
	let increment = document.getElementById('inputNumber').value
	// increment displayNumber
	displayNumber += increment
	console.log(displayNumber)
}

const clickMinus = e => {
	// grab the value to decrement from the DOM
	let decrement = document.getElementById('inputNumber').value
	// decrement displayNumber
	displayNumber -= decrement
	console.log(displayNumber)
}

const addButtonListeners = () => {
	// add an event listener for clicks on plus button
	document.getElementById('plusButton').addEventListener('click', clickPlus)

	// add an event listener for clicks on minus button
	document.getElementById('minus').addEventListener('click', clickMinus)
}


