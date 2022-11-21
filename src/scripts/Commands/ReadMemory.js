/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export class ReadMemory {
  execute() {
    return parseFloat(localStorage.getItem('val'));
  }
}
