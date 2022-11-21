/* eslint-disable import/prefer-default-export */
import { SimplCommand } from './SimplCommand';

export class MultCommand extends SimplCommand {
  execute(currentValue) {
    this.value *= currentValue;
    return this.value;
  }

  undo(currentValue) {
    return currentValue / this.value;
  }
}
