import {calculator} from "../Calculator";

const tenButton = document.getElementById('pow-buttons')

tenButton.addEventListener('click', (event) => {
    calculator.computeWithout(event.target.value)
    calculator.updateDisplay()
})

const sqrtButton = document.getElementById('sqrt-buttons')

sqrtButton.addEventListener('click', (event) => {
    calculator.computeWithout(event.target.value)
    calculator.updateDisplay()
})

const facButton = document.getElementById('fac')

facButton.addEventListener('click', (event) => {
    calculator.computeWithout(event.target.value)
    calculator.updateDisplay()
})
