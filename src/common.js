export function getRandomInt(inMin, inMax) {
  const min = Math.ceil(inMin);
  const max = Math.floor(inMax);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isEven(num) {
  return num % 2 === 0;
}
