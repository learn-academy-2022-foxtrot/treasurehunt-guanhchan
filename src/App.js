import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (clickSquare) => {
    alert(clickSquare)

  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board-game">
        {board.map((square, index) => {
          return <Square
            square={square}
            index={index}
            handleGamePlay={handleGamePlay}
            key={index}
          />
        })}

      </div>
    </>
  )
}

export default App
