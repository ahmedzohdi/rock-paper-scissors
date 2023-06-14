import { Fragment, useEffect, useState } from "react";
import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";
import classes from "./App.module.css";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = [rock, paper, scissors];

  const clickHandler = (value) => {
    const computerResult = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(value);
    setComputerChoice(computerResult);
  };

  useEffect(() => {
    gameResult();
  }, [userChoice, computerChoice]);

  const gameResult = () => {
    if (
      userChoice + computerChoice === rock + scissors ||
      userChoice + computerChoice === scissors + paper ||
      userChoice + computerChoice === paper + rock
    ) {
      setResult("YOU WON!");
    } else if (
      userChoice + computerChoice === rock + paper ||
      userChoice + computerChoice === scissors + rock ||
      userChoice + computerChoice === paper + scissors
    ) {
      setResult("YOU LOST!");
    } else if (
      userChoice + computerChoice === rock + rock ||
      userChoice + computerChoice === scissors + scissors ||
      userChoice + computerChoice === paper + paper
    ) {
      setResult("DRAW!");
    }
  };

  const resultColor =
    result === "YOU WON!"
      ? classes.won
      : result === "YOU LOST!"
      ? classes.lost
      : result === "DRAW!"
      ? classes.draw
      : "";
  return (
    <Fragment>
      <div className={classes.result}>
        <div>
          <h2>User</h2>
          <img src={userChoice} alt="" />
        </div>
        <div>
          <h2>Computer</h2>
          <img src={computerChoice} alt="" />
        </div>
      </div>
      <h1 className={resultColor}>{result}</h1>
      <div className={classes.choices}>
        {choices.map((choice, index) => (
          <img
            key={index}
            onClick={() => clickHandler(choice)}
            src={choice}
            alt=""
          />
        ))}
      </div>
    </Fragment>
  );
};

export default App;
