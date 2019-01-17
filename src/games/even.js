#!/usr/bin/env node
import readlineSync from 'readline-sync';

const runEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let counter = 1; counter === 3; counter + 1) {
    const number = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    const correct = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const reply = readlineSync.question('Your answer: ');
    if (reply === correct) {
      console.log('Correct!');
    } else {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default runEven;
