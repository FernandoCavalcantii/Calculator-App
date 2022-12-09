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
      let secOperand = stack.pop();
      let firOperand = stack.pop();
      let result = secOperand / firOperand;
      stack.push(result);
    } else if (char === '-') {
      let secOperand = stack.pop();
      let firOperand = stack.pop();
      let result = firOperand - secOperand;
      stack.push(result);
    } else {
      // add number operation
      stack.push(parseFloat(char));
    }
  }

  return stack.pop();
}

export default solveExpression;
