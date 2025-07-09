import React from "react"
import Die from "./components/Die";

export default function App() {
    const [dice, setDice] = React.useState(allNewDice()); // Initialize state with random numbers

    function allNewDice() {
      return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1)

    }

    const diceElements = dice.map(num => <Die key={num} value={num} />);

    return (
        <>
          <main>
            <div className="dice-container">
              {diceElements}
            </div>
          </main>
        </>
    );
}