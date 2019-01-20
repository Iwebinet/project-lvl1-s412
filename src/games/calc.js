import getRandom from '../utils';
import play from '..';

const description = 'What is the result of the expression?';

const getQuestionAnswer = () => {
  const x = getRandom(1, 10);
  const y = getRandom(1, 10);
  const operation = getRandom(1, 3);
  let question;
  let correctAnswer;
  switch (operation) {
    case 1:
      question = `${x} + ${y}`;
      correctAnswer = x + y;
      break;
    case 2:
      question = `${x} - ${y}`;
      correctAnswer = x - y;
      break;
    default:
      question = `${x} * ${y}`;
      correctAnswer = x * y;
      break;
  }
  return [question, correctAnswer.toString()];
};

export default () => play(description, getQuestionAnswer);
