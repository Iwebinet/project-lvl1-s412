import { getRandom, getGreatestDenominator } from '../utils';
import { play } from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAnswer = () => {
  const x = getRandom(99);
  const y = getRandom(99);
  const question = `${x} ${y}`;
  const correctAnswer = getGreatestDenominator(x, y);
  return [question, correctAnswer.toString()];
};

export default () => play(description, getQuestionAnswer);
