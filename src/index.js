import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('\nMay I have your name? ');

const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const numQuestions = 3;
const play = (description, getQuestionAnswer) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const name = askName();
  console.log(`Hello, ${name}!\n`);

  for (let counter = 1; counter <= numQuestions; counter += 1) {
    const [question, correctAnswer] = getQuestionAnswer();
    const userAnswer = getUserAnswer(question);

    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default play;
