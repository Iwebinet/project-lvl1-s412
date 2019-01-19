import getRandom from '../utils';
import { play } from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestDenominator = (a, b) => {
  if (a < b) return getGreatestDenominator(b, a);
  if (b === 0) return a;
  return getGreatestDenominator(b, a % b);
};

const getQuestionAnswer = () => {
  const x = getRandom(99);
  const y = getRandom(99);
  const question = `${x} ${y}`;
  const correctAnswer = getGreatestDenominator(x, y);
  return [question, correctAnswer.toString()];
};

export default () => play(description, getQuestionAnswer);
