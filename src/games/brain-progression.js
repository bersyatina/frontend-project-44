import playGame from '../index.js';
import random from '../random.js';

const description = 'What number is missing in the progression?';

const getSequence = (arrayProgression, answerNumber) => {
  const question = [];
  arrayProgression.forEach((value) => {
    const addedValue = value === answerNumber ? '..' : value;
    question.push(addedValue);
  });
  return question;
};

const getPrepareData = () => {
  const start = 1;
  const end = 100;
  const step = Math.floor(Math.random() * 5) + 10;

  const arrayProgression = [];
  for (let currentNumber = start; currentNumber <= end; currentNumber += step) {
    arrayProgression.push(currentNumber);
  }

  const answerNumber = arrayProgression[random(arrayProgression.length)];
  const question = getSequence(arrayProgression, answerNumber);

  const answer = String(answerNumber);
  const preparedQuestion = question.join(' ');
  return [preparedQuestion, answer];
};

const playProgressionGame = () => {
  playGame(description, getPrepareData);
};

export default playProgressionGame;
