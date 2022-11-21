/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-alert */
import { SimplCommand } from './SimplCommand';

export class DivCommand extends SimplCommand {
  execute(currentValue) {
    if (currentValue === 0) {
      alert('Деление на 0');
      return 0;
    }
    this.value /= currentValue;
    return this.value;
  }

  undo(currentValue) {
    this.value *= currentValue;
    return this.value;
  }
}
