import playGame from '../index.js';
import random from '../random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let answer = true;
  for (let iter = 2; iter < number; iter += 1) {
    answer = !(number % iter === 0);
    if (answer === false) {
      break;
    }
  }

  if (number === 1) {
    answer = false;
  }

  return answer;
};

const getPrepareData = () => {
  const question = random(100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const playPrimeGame = () => {
  playGame(description, getPrepareData);
};

export default playPrimeGame;
