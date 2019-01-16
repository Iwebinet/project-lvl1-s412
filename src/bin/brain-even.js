#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const parity = (number) => {
  console.log(`Question: ${number}`);
  const reply = readlineSync.question('Your answer: ');
  if ((number % 2 === 0 && reply === 'yes') || (number % 2 !== 0 && reply === 'no')) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${reply}' is wrong answer ;(. Correct answer was '${number % 2 === 0 ? 'yes' : 'no'}'.`);
  return console.log(`Let's try again, ${name}!`);
};

const number = k => k(Math.random() * (99 - 1 + 1)) + 1;
if (parity(number(Math.floor)) === 1) {
  if (parity(number(Math.floor)) === 1) {
    if (parity(number(Math.floor)) === 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
