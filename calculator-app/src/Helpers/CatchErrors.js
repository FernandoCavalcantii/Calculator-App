export const catchParenthesisError = (expression) => {
  let openingParenthesis = 0;
  let closureParenthesis = 0;
  
  for (const character of expression) {
    if (character === '(') {
      openingParenthesis += 1;
    }
    if (character === ')') {
      closureParenthesis += 1;
    }
  }
  if (openingParenthesis === closureParenthesis) {
    return false;
  }
  return true;
}
