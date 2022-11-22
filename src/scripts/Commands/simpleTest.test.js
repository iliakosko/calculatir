/* eslint-disable no-undef */
import { AddCommand } from './AddCommand';
import { DivCommand } from './DivCommand';
import { SubtCommand } from './SubtCommand';
import { MultCommand } from './MultCommand';
import { FactCommand } from './FactCommand';
import { OneCommand } from './OneCommand';

import { SqrtCommand } from './SqrtCommand';
import { XDegreeCommand } from './XDegreeCommand';
import { TenCommand } from './TenCommand';
import { SumbCommand } from './SumbCommand';
import { PersCommand } from './PersCommand';
import { XYDegreeCommand } from './XYDegreeCommand';

test('add', () => {
  const add = new AddCommand(1);
  expect(add.execute(1)).toBe(2);
});

test('div', () => {
  const div = new DivCommand(4);
  expect(div.execute(2)).toBe(2);
});

test('sub', () => {
  const sub = new SubtCommand(4);
  expect(sub.execute(2)).toBe(2);
});

test('mult', () => {
  const mult = new MultCommand(2);
  expect(mult.execute(2)).toBe(4);
});

test('fact', () => {
  const fact = new FactCommand(3);
  expect(fact.execute()).toBe(6);
});

test('one', () => {
  const one = new OneCommand(4);
  expect(one.execute()).toBe(0.25);
});

test('sqrt', () => {
  const sqrt = new SqrtCommand(4);
  expect(sqrt.execute(2)).toBe(16);
});

test('xDeg', () => {
  const xDeg = new XDegreeCommand(2);
  expect(xDeg.execute(3)).toBe(8);
});

test('ten', () => {
  const ten = new TenCommand(2);
  expect(ten.execute()).toBe(100);
});

test('sumb', () => {
  const sumb = new SumbCommand(2);
  expect(sumb.execute()).toBe(-2);
});

test('pers', () => {
  const pers = new PersCommand(2);
  expect(pers.execute()).toBe(0.02);
});

test('xYDeg', () => {
  const xYDeg = new XYDegreeCommand(16);
  expect(xYDeg.execute(4)).toBe(2);
});
