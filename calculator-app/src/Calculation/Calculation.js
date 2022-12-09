import infixToPostfix from './infixToPostfix';
import solveExpression from './solveExpression';

const Calculation = (
  display,
  setDisplay,
  mathExpression,
  setMathExpression,
  history,
  setHistory,
  setError
) => {
  try {
    const postfix = infixToPostfix(mathExpression);
    const result = String(solveExpression(postfix));
    setDisplay(result);
    setMathExpression(result);
    setHistory([...history, [display, result]]);
    setError(false);
  } catch {
    setError(true);
  }
};

export default Calculation;
