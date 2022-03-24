import React, { useState } from 'react';
import Header from '../../Components/Header';
import style from './style.module.css';
import Emoji from '../../Emojis';
import { catchParenthesisError } from '../../Helpers/CatchErrors';
import { parenthesisOperation } from '../../Helpers/Calculations';
<meta charset="UTF-8" />

const Calculator = () => {
  const characters  = [7, 8, 9, '/', <Emoji symbol="⟵"/>, <Emoji symbol="⊂"/>, 4, 5, 6, <Emoji symbol="×"/>, '(', ')', 1, 2, 3, '-', <Emoji symbol="x²"/>, <Emoji symbol="√"/>, 0, '.', '%', '+', '='];
  const [display, setDisplay] = useState('');
  const [error, setError] = useState(false);

  const calculate = () => {
    const expression = display.split('');
    if (catchParenthesisError(expression)) {
      return setError(true);
    }
    if (expression.includes('(')) {
      parenthesisOperation(expression);
      setError(false);
    }
    // const result = String(expression.reduce((a, b) => Number(a) + Number(b)));
    // setDisplay(result);
  }
  const handleClick = ({ target }) => {
    const expression = display.split('');
    switch(target.innerText) {
      case "⟵":
        expression.pop();
        setDisplay(expression.join(''));
        break;
      case "⊂":
        setDisplay('');
        break;
      case "x²":
        setDisplay(display + '²');
        break;
      case "=":
        calculate();
        break;
      default:
        if (display.includes('.') && target.innerText === '.') {
          setDisplay(display);
        } else {
          setDisplay(display + target.innerText);
        }
    }
  };
  return (
    <>
      <Header />
      <main className={ style.mainContainer }>
        <section className={ style.displayContainer }>
          { display }
        </section>
        {error ? <p>Malformed expression</p> : ''}
        <section className={ style.calculatorContainer }>
          {characters.map((character, index) => {
            if (character === '=') {
              return (
                <button key={ `button-${index}` } type="button" className="equal" onClick={ handleClick }>{character}</button>
              )
            }
            return (
              <button key={ `button-${index}` } type="button" onClick={ handleClick }>{character}</button>
            )
          })}
        </section>
      </main>
    </>
  )
};

export default Calculator;
