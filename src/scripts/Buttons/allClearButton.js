import {calculator} from "../Calculator";

const allClearButton = document.querySelector('[data-all-clear]')

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})
