import getRandom from '../utils';
import play from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = question => question % 2 === 0;

const getQuestionAnswer = () => {
  const question = getRandom(99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => play(description, getQuestionAnswer);
