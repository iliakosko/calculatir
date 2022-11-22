/* eslint-disable import/prefer-default-export */
export class AddCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    this.value = currentValue + this.value;
    return this.value;
  }

  undo(currentValue) {
    this.value = currentValue - this.value;
    return this.value;
  }
}
