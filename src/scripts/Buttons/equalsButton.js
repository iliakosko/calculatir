import {calculator} from "../Calculator";

const equalsButton = document.querySelector('[data-equals]')

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
