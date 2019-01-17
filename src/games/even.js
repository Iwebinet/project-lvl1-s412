import readlineSync from 'readline-sync';

const runEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if question even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const numQuestions = 3;
  for (let counter = 1; counter <= numQuestions; counter += 1) {
    const isEven = question => question % 2 === 0;
    const question = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    const correct = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const reply = readlineSync.question('Your answer: ');
    if (reply === correct) {
      console.log('Correct!');
    } else {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${correct}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default runEven;
