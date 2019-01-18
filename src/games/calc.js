import getRandom from '../utils';
import { play } from '..';

const description = 'What is the result of the expression?';

const getQuestionAnswer = () => {
  const x = getRandom(10);
  const y = getRandom(10);
  const operation = getRandom(3);
  let question;
  let correct;
  switch (operation) {
    case 1:
      question = `${x} + ${y}`;
      correct = x + y;
      break;
    case 2:
      question = `${x} - ${y}`;
      correct = x - y;
      break;
    default:
      question = `${x} * ${y}`;
      correct = x * y;
      break;
  }
  return [question, correct.toString()];
};

export default () => play(description, getQuestionAnswer);
