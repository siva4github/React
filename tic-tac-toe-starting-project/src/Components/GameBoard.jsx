import { useState } from "react";

export default function GameBoard({ onSelectCell, board }) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleCellClick(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });

    //     onSelectCell();
    //}

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={()=>onSelectCell(rowIndex, colIndex)} disabled = {playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    );
}