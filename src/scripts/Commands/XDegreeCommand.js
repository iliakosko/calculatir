/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { SimplCommand } from './SimplCommand';

export class XDegreeCommand extends SimplCommand {
  execute(currentValue) {
    const startVal = this.value;
    for (let i = 0; i < currentValue - 1; i++) {
      this.value *= startVal;
    }
    return this.value;
  }

  undo(currentValue) {
    const startVal = this.value;
    for (let i = 0; i < currentValue - 1; i++) {
      this.value /= startVal;
    }
    return this.value;
  }
}
