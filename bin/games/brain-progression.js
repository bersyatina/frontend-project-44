#!/usr/bin/env node
import { playGame, roundsCount } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const prepareData = () => {
  const start = 1;
  const end = 100;
  const step = Math.floor(Math.random() * 5) + 10;

  const arrayProgression = [];
  for (let currentNumber = start; currentNumber <= end; currentNumber += step) {
    arrayProgression.push(currentNumber);
  }

  const answerNumber = arrayProgression[Math.floor(Math.random() * arrayProgression.length)];
  const question = [];
  arrayProgression.forEach((value) => {
    const addedValue = value === answerNumber ? '..' : value;
    question.push(addedValue);
  });

  const answer = String(answerNumber);
  const preparedQuestion = question.join(' ');
  return {
    question: preparedQuestion,
    answer,
  };
};

const playProgressionGame = () => {
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const preparedData = prepareData();
    rounds.push(preparedData);
  }
  playGame(description, rounds);
};

playProgressionGame();
