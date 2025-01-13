import { getRandomInt, isEven } from '../common.js';

export default function even() {
  let res;
  const qst = getRandomInt(0, 100);
  if (isEven(qst)) {
    res = 'yes';
  } else {
    res = 'no';
  }
  return [qst, res];
}
