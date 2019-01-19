import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');

export const helloName = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${askName()}!`);
};

const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const numQuestions = 3;
export const play = (description, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = askName();
  console.log(`Hello, ${name}!`);

  for (let counter = 1; counter <= numQuestions; counter += 1) {
    const questionAnswer = getQuestionAnswer();
    const [question, correctAnswer] = questionAnswer;
    const userAnswer = getUserAnswer(question);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return true;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return false;
};
