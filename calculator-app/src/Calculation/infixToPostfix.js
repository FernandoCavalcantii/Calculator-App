import {
  checkIfIsAnOperator,
  getPrecedence,
  separateNumbersAndOperators,
} from './helpers.js';

function infixToPostfix(infix) {
  let output = '';
  let stack = [];
  for (let i = 0; i < infix.length; i++) {
    let ch = infix.charAt(i);
    if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
      while (
        stack.length !== 0 &&
        stack[stack.length - 1] !== '(' &&
        getPrecedence(ch) <= getPrecedence(stack[stack.length - 1])
      ) {
        output += stack.pop();
      }
      stack.push(ch);
    } else if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      while (stack.length !== 0 && stack[stack.length - 1] !== '(') {
        output += stack.pop();
      }
      stack.pop();
    } else {
      output += ch;
    }
  }

  // Logic partially extracted from:
  // https://www.tutorialspoint.com/how-to-create-infix-to-postfix-converter-in-javascript

  while (stack.length !== 0) {
    output += stack.pop();
  }

  let rawOutput = output.split(' ').filter((ch) => ch !== '');
  let formatedOutput = separateNumbersAndOperators(rawOutput);
  let finalOutput = [];

  formatedOutput.forEach((str) => {
    let lastCh = str[str.length - 1];
    if (!checkIfIsAnOperator(lastCh)) {
      finalOutput.push(str);
    } else {
      for (let i = 0; i < str.length; i += 1) {
        if (checkIfIsAnOperator(str[i]) && !checkIfIsAnOperator(str[i - 1])) {
          finalOutput.push(str.slice(0, i));
          finalOutput.push(str[i]);
        } else {
          finalOutput.push(str[i]);
        }
      }
    }
  });

  return finalOutput.filter((ch) => ch !== '');
}

export default infixToPostfix;
