/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-const */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import { AddCommand } from './Commands/AddCommand';
import { SubtCommand } from './Commands/SubtCommand';
import { MultCommand } from './Commands/MultCommand';
import { DivCommand } from './Commands/DivCommand';
import { SqrtCommand } from './Commands/SqrtCommand';
import { XDegreeCommand } from './Commands/XDegreeCommand';
import { OneCommand } from './Commands/OneCommand';
import { TenCommand } from './Commands/TenCommand';
import { FactCommand } from './Commands/FactCommand';
import { SumbCommand } from './Commands/SumbCommand';
import { PersCommand } from './Commands/PersCommand';
import { XYDegreeCommand } from './Commands/XYDegreeCommand';
import { AddMemory } from './Commands/AddMemory';
import { ClearMemory } from './Commands/ClearMemory';
import { SubMemory } from './Commands/SubMemory';
import { ReadMemory } from './Commands/ReadMemory';

const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '' || operation === '=') return;
    if (operation.toLocaleLowerCase() === 'X y'.toLocaleLowerCase()) {
      operation = 'x^y';
    }
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  addMemory() {
    const mAdd = new AddMemory();
    mAdd.execute(this.currentOperandTextElement.innerText);
  }

  clearMemory() {
    const c = new ClearMemory();
    c.execute();
  }

  subMemory() {
    const mSub = new SubMemory();
    mSub.execute(this.currentOperandTextElement.innerText);
  }

  readMemory() {
    const r = new ReadMemory();
    this.currentOperand = r.execute();
    this.updateDisplay();
  }

  computeDeg(degree) {
    const a = new SqrtCommand(this.currentOperand);
    this.currentOperand = a.execute(parseFloat(degree));
  }

  computeWithout(act) {
    let computation; let
      simCommand;
    switch (act) {
      case 'one':
        simCommand = new OneCommand(this.currentOperand);
        break;
      case 'ten':
        simCommand = new TenCommand(this.currentOperand);
        break;
      case 'fac':
        simCommand = new FactCommand(this.currentOperand);
        break;
      case 'neg':

        simCommand = new SumbCommand(this.currentOperand);
        break;
      case 'pers':

        simCommand = new PersCommand(this.currentOperand);
        break;
      default:
        return;
    }
    this.previousOperand = this.currentOperand;

    computation = simCommand.execute();
    this.currentOperand = computation;
  }

  compute() {
    let computation; let
      simCommand;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        simCommand = new AddCommand(prev);
        break;
      case '-':
        simCommand = new SubtCommand(prev);
        break;
      case '*':
        simCommand = new MultCommand(prev);
        break;
      case '/':
        simCommand = new DivCommand(prev);
        break;
      case 'x^y':
        simCommand = new XDegreeCommand(prev);
        break;
      case 'y√x':
        simCommand = new XYDegreeCommand(prev);
        break;
      default:
        return;
    }
    computation = simCommand.execute(current);
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    }
    return integerDisplay;
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
}
export const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
