/* eslint-disable import/prefer-default-export */
import { SimplCommand } from './SimplCommand';

export class XYDegreeCommand extends SimplCommand {
  execute(currentValue) {
    if (currentValue !== 0) {
      this.value **= (1 / currentValue);
    } else {
      return 0;
    }
    return this.value;
  }

  undo(currentValue) {
    if (currentValue !== 0) {
      this.value **= currentValue;
    } else {
      return 0;
    }
    return this.value;
  }
}
