import {calculator} from "../Calculator";

const numberButtons = document.getElementById('numbers-container')

numberButtons.addEventListener('click', (event) => {
    calculator.appendNumber(event.target.innerText)
    calculator.updateDisplay()
})
