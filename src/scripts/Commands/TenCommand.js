/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { SimplCommand } from './SimplCommand';

export class TenCommand extends SimplCommand {
  execute() {
    this.value = 10 ** (this.value);
    return this.value;
  }

  undo() {
    return 0;
  }
}
