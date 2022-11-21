/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { calculator } from '../Calculator';

const equalsButton = document.querySelector('[data-equals]');

equalsButton.addEventListener('click', (button) => {
  calculator.compute();
  calculator.updateDisplay();
});
