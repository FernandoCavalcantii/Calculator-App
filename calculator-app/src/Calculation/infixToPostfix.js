function convertToPostfix(infix) {
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
        // output += ' ';
      }
      stack.push(ch);
    } else if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      while (stack.length !== 0 && stack[stack.length - 1] !== '(') {
        output += stack.pop();
        // output += ' ';
      }
      stack.pop();
    } else {
      output += ch;
    }
  }
  while (stack.length !== 0) {
    output += stack.pop();
    // output += ' ';
  }

  let rawOutput = output.split(' ').filter((ch) => ch !== '');
  let finalOutput = [];
  console.log(rawOutput);
  rawOutput.forEach((str) => {
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

  return finalOutput;
}
function getPrecedence(ch) {
  if (ch === '+' || ch === '-') {
    return 1;
  } else if (ch === '*' || ch === '/') {
    return 2;
  } else {
    return 0;
  }
}

function checkIfIsAnOperator(ch) {
  if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
    return true;
  }
  return false;
}

let expression = convertToPostfix('(10 + 5) + 3 * 4');
console.log(expression);

function solveExpression(expr) {
  let stack = [];

  for (let i = 0; i < expr.length; i += 1) {
    let char = expr[i];
    if (char === '+') {
      // Sum operation
      let result = stack.pop() + stack.pop();
      stack.push(result);
    } else if (char === '*') {
      // Mul operation
      let result = stack.pop() * stack.pop();
      stack.push(result);
    } else if (char === '/') {
      // Div operation
      let result = stack.pop() / stack.pop();
      stack.push(result);
    } else if (char === '-') {
      let result = stack.pop() - stack.pop();
      stack.push(result);
    } else {
      // add number operation
      stack.push(parseFloat(char));
    }

    return stack.pop();
  }
}

// console.log(solveExpression(expression));
