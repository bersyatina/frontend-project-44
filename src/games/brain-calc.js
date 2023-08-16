import playGame from '../index.js';
import random from '../random.js';

const description = 'What is the result of the expression?';

const calculate = (operator, firsNumber, lastNumber) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = firsNumber + lastNumber;
      break;
    case '-':
      result = firsNumber - lastNumber;
      break;
    case '*':
      result = firsNumber * lastNumber;
      break;
    default:
      console.log('Operator unknown!');
  }
  return result;
};

const getPrepareData = () => {
  const firsNumber = random(100);
  const lastNumber = random(100);

  const operators = ['+', '-', '*'];
  const operator = operators[random(operators.length)];

  const question = `${firsNumber} ${operator} ${lastNumber}`;
  const answer = String(calculate(operator, firsNumber, lastNumber));

  return [question, answer];
};

const playCalcGame = () => {
  playGame(description, getPrepareData);
};

export default playCalcGame;
