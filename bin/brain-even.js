#!/usr/bin/env node
import readlineSync from 'readline-sync';

const rounds = 3;

const playGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= rounds; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const trueAnswer = (number % 2 === 0) ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${number}\n`);
    console.log(`Your answer: ${answer}`);
    if (trueAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}\nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

playGames();
