#!/usr/bin/env node
import { playGame, roundsCount } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => {
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const question = Math.floor(Math.random() * 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    rounds.push({ question, answer });
  }
  playGame(description, rounds);
};

playEvenGame();
