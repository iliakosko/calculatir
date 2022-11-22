/* eslint-disable no-undef */
import { AddCommand } from './AddCommand';

test('asd', () => {
  const a = new AddCommand(1);
  expect(a.execute(1)).toBe(2);
});
