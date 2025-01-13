import { getRandomInt } from '../common.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export default function prime() {
  let res;
  const qst = getRandomInt(0, 100);
  if (isPrime(qst)) {
    res = 'yes';
  } else {
    res = 'no';
  }
  return [qst, res];
}
