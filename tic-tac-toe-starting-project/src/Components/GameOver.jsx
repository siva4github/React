export default function GameOver({ winner, onRestartGame }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner ? <p>Winner: {winner}</p> : <p>It's a draw!</p>}
            <button onClick={onRestartGame}>Restart Game</button>
        </div>
    );
}