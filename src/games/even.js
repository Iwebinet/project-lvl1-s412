import { getRandom, isEven } from '../utils';
import { play } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAnswer = () => {
  const question = getRandom(99);
  let correctAnswer;
  if (isEven(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

export default () => play(description, getQuestionAnswer);
