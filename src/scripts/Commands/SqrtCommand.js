/* eslint-disable import/prefer-default-export */
import { SimplCommand } from './SimplCommand';

export class SqrtCommand extends SimplCommand {
  execute(degree) {
    console.log(`sqr:${this.value}`);
    if (this.value < 0) {
      this.value *= (-1);
      this.value **= degree;
      this.value *= (-1);
    } else {
      this.value **= degree;
    }
    return this.value;
  }

  undo(degree) {
    this.value **= (1 / degree);
    return this.value;
  }
}
