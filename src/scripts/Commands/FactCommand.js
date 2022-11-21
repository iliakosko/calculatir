/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import { SimplCommand } from './SimplCommand';

export class FactCommand extends SimplCommand {
  execute() {
    if (this.value < 0) {
      this.value = 0;
      alert('Отрицатеьное число');
    }
    if (this.value === 0 || this.value === 1) { this.value = 1; }
    for (let i = this.value - 1; i >= 1; i--) {
      this.value *= i;
    }
    return this.value;
  }

  undo() {
    return 0;
  }
}
