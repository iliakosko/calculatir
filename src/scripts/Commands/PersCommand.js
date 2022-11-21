/* eslint-disable import/prefer-default-export */
import { SimplCommand } from './SimplCommand';

export class PersCommand extends SimplCommand {
  execute() {
    this.value /= 100;
    return this.value;
  }

  undo() {
    this.value *= 100;
    return this.value;
  }
}
