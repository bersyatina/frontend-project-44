#!/usr/bin/env node
import readlineSync from 'readline-sync';

const roundsCount = 3;

const log = (text) => {
  console.log(text);
};

const playGame = (description, rounds) => {
  log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  log(`Hello, ${userName}!`);
  log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const answer = readlineSync.question(`Question: ${rounds[i].question}`, {
      hideEchoBack: true,
      mask: '',
    });
    log(`Your answer: ${answer}`);
    if (answer !== rounds[i].answer) {
      log(`${answer} is wrong answer ;(. Correct answer was ${rounds[i].answer}`);
      log(`Let's try again, ${userName}!`);
      return;
    }
    log('Correct!');
  }
  log(`Congratulations, ${userName}!`);
};

export { roundsCount, playGame };
