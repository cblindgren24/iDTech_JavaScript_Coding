import greet from './greet.js';

test('handle null', () => {
  expect(greet()).toEqual("Hello there");
});

test('outputs the correct string', () => {
  expect(greet('Elizabeth')).toBe("Hello Elizabeth");
});

test('outputs the correct array', () => {
  expect(greet(['Elizabeth', 'Anna'])).toBe("Hello Elizabeth, Anna");
});

test('handles all caps', () => {
  expect(greet('ANNA')).toBe("HELLO ANNA!");
});

