import { getRandomInt } from '../common.js';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

export default function gcd() {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const qst = `${num1} ${num2}`;
  const res = NOD(num1, num2).toString();
  return [qst, res];
}
