import readlineSync from 'readline-sync';

const numQuestions = 3;
const isEven = question => question % 2 === 0;

const runEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if question even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let counter = 1; counter <= numQuestions; counter += 1) {
    const question = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    const answer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const reply = readlineSync.question('Your answer: ');
    if (reply === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};

export default runEven;
