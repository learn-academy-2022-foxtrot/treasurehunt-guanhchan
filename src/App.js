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

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  const handleGamePlay = (clickSquare) => {
    let updateBoard = [...board]
    if (clickSquare === treasureLocation) {
      updateBoard[clickSquare] = '🌙'
      setBoard(updateBoard)
    } else if(clickSquare === bombLocation){
      updateBoard[clickSquare] = '🚀'
      setBoard(updateBoard)
    } else {
      updateBoard[clickSquare] = '🐕' // 🌙
      setBoard(updateBoard)

    }

  }

  const handleReset = () => {

    setBoard([
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
    setTreasureLocation(Math.floor(Math.random() * board.length))
    setBombLocation(Math.floor(Math.random() * board.length))
  }

  console.log('Booty', treasureLocation)
  console.log('Rocket', bombLocation)
  return (
    <>
      <h1>Treasure Hunt Game 🐕 🚀 🌙</h1>
      <div className="button">
         <button onClick={handleReset}>Play Again</button>
      </div>
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
