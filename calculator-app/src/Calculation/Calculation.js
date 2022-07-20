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
    const result = String(eval(mathExpression));
    setDisplay(result);
    setMathExpression(result);
    setHistory([...history, [display, result]]);
    setError(false);
  } catch {
    setError(true);
  }
};

export default Calculation;
