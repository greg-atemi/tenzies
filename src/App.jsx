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
      setDice(prevDice =>
        prevDice.map(die => 
            die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 }
      ));
    }

    function hold(id) {
      setDice(prevDice => 
          prevDice.map(die => 
              die.id === id ? { ...die, isHeld: !die.isHeld } : die
          )
      );
    }

    const diceElements = dice.map(dieObj => (
      <Die
        key={dieObj.id}
        id={dieObj.id}
        value={dieObj.value}
        isHeld={dieObj.isHeld}
        hold={() => hold(dieObj.id)} // Pass the hold function with the die's id
      />
    ));

    return (
        <>
          <main>
            <h1 className="title"> Tenzies </h1>
            <p className="instructions">
              Roll until all dice are held. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="dice-container">
              {diceElements}
            </div>

            <button className="roll-dice" onClick={rollDice}>Roll</button>

          </main>
        </>
    );
}