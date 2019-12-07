console.log('script started!')

let displayNumber, inputNumber

const clickPlus = e => {
	console.log('clicked plus!')
	// grab the value to increment from the DOM
	let increment = Number(document.getElementById('inputNumber').value)
	console.log(`increment: ${increment}`)
	// increment displayNumber
	displayNumber += increment
	console.log(displayNumber)
	if (displayNumber >= 0) {
		document.getElementById('displayNumber').setAttribute('negative', 'false')
	}
	document.getElementById('displayNumber').textContent = `${displayNumber}`
}

const clickMinus = e => {
	console.log('clicked minus!')
	// grab the value to decrement from the DOM
	let decrement = Number(document.getElementById('inputNumber').value)
	// decrement displayNumber
	displayNumber -= decrement
	console.log(displayNumber)
	if (displayNumber < 0) {
		document.getElementById('displayNumber').setAttribute('negative','true')
	}
	document.getElementById('displayNumber').textContent = `${displayNumber}`
	
}

const addButtonListeners = () => {
	// add an event listener for clicks on plus button
	document.getElementById('plusButton').addEventListener('click', clickPlus)

	// add an event listener for clicks on minus button
	document.getElementById('minus').addEventListener('click', clickMinus)
}

const start = () => {
	// set initial display value
	displayNumber = Number(document.getElementById('displayNumber').textContent)
	console.log(displayNumber)

	// set initial input value
	inputNumber = Number(document.getElementById('inputNumber').placeholder)
	console.log(inputNumber)
	// set input text to placeholder
	document.getElementById('inputNumber').value = `${inputNumber}`

	// add event listeners
	addButtonListeners()

	console.log(`\ndisplay: ${displayNumber}\ninput: ${inputNumber}\n`)
}

document.addEventListener('DOMContentLoaded', () => {
	start()
})


