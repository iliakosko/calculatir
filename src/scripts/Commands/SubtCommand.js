/* eslint-disable import/prefer-default-export */
import { SimplCommand } from './SimplCommand';

export class SubtCommand extends SimplCommand {
  execute(currentValue) {
    this.value -= currentValue;
    return this.value;
  }

  undo(currentValue) {
    this.value += currentValue;
    return this.value;
  }
}
