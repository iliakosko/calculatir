/* eslint-disable no-undef */
import { calculator } from '../Calculator';

const memoryClearButtons = document.getElementById('memory-clear');
const memoryAddButton = document.getElementById('memory-add');
const memorySubButton = document.getElementById('memory-sub');
const memoryReadButton = document.getElementById('memory-read');

memoryAddButton.addEventListener('click', () => {
  calculator.addMemory();
});

memoryClearButtons.addEventListener('click', () => {
  calculator.clearMemory();
});

memorySubButton.addEventListener('click', () => {
  calculator.subMemory();
});

memoryReadButton.addEventListener('click', () => {
  calculator.readMemory();
});
