export function checkIfIsAnOperator(ch) {
  if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
    return true;
  }
  return false;
}

export function getPrecedence(ch) {
  if (ch === '+' || ch === '-') {
    return 1;
  } else if (ch === '*' || ch === '/') {
    return 2;
  } else {
    return 0;
  }
}

export const separateNumbersAndOperators = (arr) => {
  let result = [];
  arr.forEach((el) => {
    let elements = [];
    let lastCh = el[el.length - 1];
    while (checkIfIsAnOperator(lastCh)) {
      elements.unshift(lastCh);
      el = el.slice(0, -1);
      lastCh = el[el.length - 1];
    }
    elements.unshift(el);
    elements.forEach((el) => result.push(el));
  });
  return result;
};
