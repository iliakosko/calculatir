import {calculator} from "../Calculator";

const operationButtons = document.getElementById('simple-math-operations')
const negButton = document.getElementById('neg')
const percentButton = document.getElementById('pers')
const xpowy = document.getElementById('xpowy')
const ysqrtx = document.getElementById('ysqrtx')

operationButtons.addEventListener('click', (event) => {
    calculator.chooseOperation(event.target.innerText)
    calculator.updateDisplay()
})

negButton.addEventListener('click', (event) => {
    calculator.computeWithout(event.target.value)
    calculator.updateDisplay()
})

percentButton.addEventListener('click', (event) => {
    calculator.computeWithout(event.target.value)
    calculator.updateDisplay()
})

xpowy.addEventListener('click', (event) => {
    calculator.chooseOperation(event.target.innerText)
    calculator.updateDisplay()
})

ysqrtx.addEventListener('click', (event) => {
    calculator.chooseOperation(event.target.innerText)
    calculator.updateDisplay()
})
