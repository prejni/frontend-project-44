import { getRandomInt } from '../common.js';

export default function even() {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const operators = ['*', '-', '+'];
  const mathItUp = {
    '+': function (x, y) { return x + y; },
    '-': function (x, y) { return x - y; },
    '*': function (x, y) { return x * y; },
  };
  const operator = operators[getRandomInt(0, 2)];
  const qst = `${num1} ${operator} ${num2}`;
  const res = mathItUp[operator](num1, num2).toString();
  return [qst, res];
}
