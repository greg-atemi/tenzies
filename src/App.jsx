import React from "react"
import { nanoid } from "nanoid";
import Die from "./components/Die";

export default function App() {
    const [dice, setDice] = React.useState(generateAllNewDice()); // Initialize state with random numbers

    function generateAllNewDice() {
      return Array.from({ length: 10 }, () => ({
        value: Math.floor(Math.random() * 6) + 1, // Random number between 1 and 6
        isHeld: false, // Default to false
        id: nanoid() // Unique ID for each die
      }));
    }

    function rollDice() {
        setDice(generateAllNewDice());
    }

    const diceElements = dice.map(dieObj => (
      <Die
        key={dieObj.id}
        value={dieObj.value}
        isHeld={dieObj.isHeld}
      />
    ));

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