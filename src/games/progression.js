import { getRandomInt } from '../common.js';

export default function progression() {
  const lenProg = getRandomInt(5, 10);
  const step = getRandomInt(0, 100);
  const mask = '..';
  let elem = step;
  let res;
  const positon = getRandomInt(1, lenProg);
  const arr = [];
  for (let i = 1; i <= lenProg; i += 1) {
    if (i === positon) {
      res = elem.toString();
      arr.push(mask);
    } else {
      arr.push(elem);
    }
    elem += step;
  }
  const qst = arr.join(' ');
  return [qst, res];
}
