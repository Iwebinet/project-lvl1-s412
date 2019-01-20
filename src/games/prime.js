import getRandom from '../utils';
import play from '..';

const description = 'Answer "yes" if given numQuestion is prime. Otherwise answer "no".';

const isPrime = (numQuestion) => {
  if (numQuestion < 2) return false;
  const check = numQuestion / 2;
  const iter = (counter) => {
    if (counter > check) return true;
    if (numQuestion % counter === 0) return false;
    return iter(counter + 1);
  };
  return iter(2);
};

const getQuestionAnswer = () => {
  const question = getRandom(1, 99);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => play(description, getQuestionAnswer);
