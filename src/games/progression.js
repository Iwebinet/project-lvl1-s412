import getRandom from '../utils';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const lengthProgression = 10;
const getProgression = (start, step, elementPosition) => {
  let progression = '';
  for (let counter = 0; counter < lengthProgression; counter += 1) {
    const stepProgress = start + step * counter;
    progression = counter === elementPosition ? progression += '.. ' : progression += `${stepProgress} `;
  }

  return progression;
};

const getQuestionAnswer = () => {
  const start = getRandom(19);
  const step = getRandom(5);
  const elementPosition = getRandom(10);

  const question = getProgression(start, step, elementPosition);
  const correctAnswer = start + elementPosition * step;
  return [question, correctAnswer.toString()];
};

export default () => play(description, getQuestionAnswer);
