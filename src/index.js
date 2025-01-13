import readlineSync from 'readline-sync';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

export default function game(gameName) {
  let res;
  let qst;
  let answer;
  const maxIter = 3;
  const games = {
    even: { rule: 'Answer "yes" if the number is even, otherwise answer "no".', fnc: even },
    calc: { rule: 'What is the result of the expression?', fnc: calc },
    gcd: { rule: 'Find the greatest common divisor of given numbers.', fnc: gcd },
    progression: { rule: 'What number is missing in the progression?', fnc: progression },
    prime: { rule: 'Answer "yes" if given number is prime. Otherwise answer "no".', fnc: prime },
  };
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(games[gameName].rule);
  for (let i = 0; i < maxIter; i += 1) {
    [qst, res] = games[gameName].fnc();
    console.log(`Question: ${qst}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === res) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
