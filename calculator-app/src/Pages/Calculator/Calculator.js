import React, { useContext } from "react";
import Header from "../../Components/Header";
import style from "./style.module.css";
import Emoji from "../../Emojis";
import Footer from "../../Components/Footer/Footer";
import Calculation from "../../Calculation";
import CalculationContext from "../../Context/Calculator/CalculationContext";

<meta charset="UTF-8" />;

const Calculator = () => {
  const characters = [
    7,
    8,
    9,
    "/",
    <Emoji symbol="⟵" />,
    <Emoji symbol="⊂" />,
    4,
    5,
    6,
    <Emoji symbol="×" />,
    "(",
    ")",
    1,
    2,
    3,
    "-",
    <Emoji symbol="x²" />,
    <Emoji symbol="√" />,
    0,
    ".",
    "%",
    "+",
    "=",
  ];
  // const [display, setDisplay] = useState("");
  // const [history, setHistory] = useState([]);
  // const [mathExpression, setMathExpression] = useState("");
  // const [error, setError] = useState(false);
  const {
    display,
    setDisplay,
    mathExpression,
    setMathExpression,
    history,
    setHistory,
    error,
    setError,
  } = useContext(CalculationContext);

  const handleClick = ({ target }) => {
    const expression = display.split("");
    const splitMathExpression = mathExpression.split("");
    switch (target.innerText) {
      case "⟵":
        expression.pop();
        splitMathExpression.pop();
        setDisplay(expression.join(""));
        setMathExpression(splitMathExpression.join(""));
        break;
      case "⊂":
        setDisplay("");
        setMathExpression("");
        break;
      case "x²":
        setDisplay(display + "²");
        setMathExpression(
          mathExpression +
            `*${mathExpression.split("")[mathExpression.length - 1]}`
        );
        break;
      case "×":
        setDisplay(display + target.innerText);
        setMathExpression(mathExpression + "*");
        break;
      case "√":
        setDisplay(display + target.innerText);
        setMathExpression();
        break;
      case "=":
        Calculation(
          display,
          setDisplay,
          mathExpression,
          setMathExpression,
          history,
          setHistory,
          setError
        );
        break;
      default:
        if (display.includes(".") && target.innerText === ".") {
          setDisplay(display);
          setMathExpression(mathExpression);
        } else {
          setDisplay(display + target.innerText);
          setMathExpression(mathExpression + target.innerText);
        }
    }
  };
  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <section className={style.historyContainer}>
          {history.map((historyArray, index) => {
            return (
              <section
                key={`Math operation ${index}`}
                className={style.historyItem}
              >
                <p>{historyArray[0]}</p>
                <p className={style.historyEqual}>=</p>
                <p>{historyArray[1]}</p>
              </section>
            );
          })}
        </section>
        <section className={style.displayContainer}>{display}</section>
        {error ? <p>Malformed expression</p> : ""}
        <section className={style.calculatorContainer}>
          {characters.map((character, index) => {
            if (character === "=") {
              return (
                <button
                  key={`button-${index}`}
                  type="button"
                  className="equal"
                  onClick={handleClick}
                >
                  {character}
                </button>
              );
            }
            return (
              <button
                key={`button-${index}`}
                type="button"
                onClick={handleClick}
              >
                {character}
              </button>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Calculator;
