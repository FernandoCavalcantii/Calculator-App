import React, { useState } from 'react';
import CalculationContext from './CalculationContext';

const CalculationProvider = ({ children }) => {
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState([]);
  const [mathExpression, setMathExpression] = useState('');
  const [error, setError] = useState(false);
  const value = {
    display,
    setDisplay,
    mathExpression,
    setMathExpression,
    history,
    setHistory,
    error,
    setError,
  };
  return (
    <CalculationContext.Provider value={value}>
      {children}
    </CalculationContext.Provider>
  );
};

export default CalculationProvider;
