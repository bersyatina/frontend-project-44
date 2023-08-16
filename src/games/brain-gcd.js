import playGame from '../index.js';
import random from '../random.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  let first = firstNumber;
  let second = secondNumber;
  while (second !== 0) {
    const gcd = first % second;
    first = second;
    second = gcd;
  }
  return first;
};

const getPrepareData = () => {
  const firstNumber = random(100);
  const secondNumber = random(100);

  const question = `${firstNumber} ${secondNumber}`;

  const gcd = getGcd(firstNumber, secondNumber);

  const answer = String(gcd);

  return [question, answer];
};

const playGcdGame = () => {
  playGame(description, getPrepareData);
};

export default playGcdGame;
