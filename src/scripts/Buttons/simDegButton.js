import {calculator} from "../Calculator";

const simDegButton = document.getElementById('deg')
const sqrtButton = document.getElementById('sqrtdeg')

simDegButton.addEventListener('click', (event) => {
    calculator.computeDeg(event.target.value)
    calculator.updateDisplay()
})

sqrtButton.addEventListener('click', (event) => {
    calculator.computeDeg(event.target.value)
    calculator.updateDisplay()
})
