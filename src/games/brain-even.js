import playGame from '../index.js';
import random from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getPrepareData = () => {
  const question = random(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const playEvenGame = () => {
  playGame(description, getPrepareData);
};

export default playEvenGame;
