#!/usr/bin/env node
import { playGame, roundsCount } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const prepareData = () => {
  let firstNumber = Math.floor(Math.random() * 100);
  let secondNumber = Math.floor(Math.random() * 100);

  const question = `${firstNumber} ${secondNumber}`;

  while (secondNumber !== 0) {
    const gcd = firstNumber % secondNumber;
    firstNumber = secondNumber;
    secondNumber = gcd;
  }

  const answer = String(firstNumber);

  return { question, answer };
};

const playGcdGame = () => {
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const preparedData = prepareData();
    rounds.push(preparedData);
  }
  playGame(description, rounds);
};

playGcdGame();
