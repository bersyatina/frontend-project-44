import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (description, prepareData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = prepareData();
    const answerUser = readlineSync.question(`Question: ${question}`, {
      hideEchoBack: true,
      mask: '',
    });
    console.log(`Your answer: ${answer}`);
    if (answerUser !== answer) {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
