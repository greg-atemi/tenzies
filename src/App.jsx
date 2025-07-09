import React from "react"
import Die from "./components/Die";

export default function App() {
    const [dice, setDice] = React.useState(generateAllNewDice()); // Initialize state with random numbers

    function generateAllNewDice() {
      return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1)
    }

    function rollDice() {
        setDice(generateAllNewDice());
    }

    const diceElements = dice.map(num => <Die value={num} />);

    return (
        <>
          <main>
            <div className="dice-container">
              {diceElements}
            </div>

            <button className="roll-dice" onClick={rollDice}>Roll</button>

          </main>
        </>
    );
}