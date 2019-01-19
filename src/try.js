import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');

const helloName = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${askName()}!`);
};

export default helloName;
