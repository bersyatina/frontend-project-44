import playGame from '../index.js';

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

const prepareData = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const playPrimeGame = () => {
  playGame(description, prepareData);
};

export default playPrimeGame;
