/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export class SubMemory {
  execute(currentValue) {
    const cV = parseFloat(currentValue.replace(',', ''));
    const memoryVal = parseFloat(localStorage.getItem('val'));
    if (isNaN(memoryVal)) {
      localStorage.setItem('val', cV);
    } else {
      const rez = memoryVal - cV;
      localStorage.setItem('val', rez);
    }
  }
}
