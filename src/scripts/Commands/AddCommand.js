import { SimplCommand } from './SimplCommand';

/* eslint-disable import/prefer-default-export */
export class AddCommand extends SimplCommand {
  execute(currentValue) {
    this.value = currentValue + this.value;
    return this.value;
  }

  undo(currentValue) {
    this.value = currentValue - this.value;
    return this.value;
  }
}
