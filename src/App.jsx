import './App.css'
import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                currentSquare.id == id ? newSquares.push({...currentSquare, on:!currentSquare.on}) : newSquares.push(currentSquare)
            }
            return newSquares
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={x => toggle(square.id)}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
