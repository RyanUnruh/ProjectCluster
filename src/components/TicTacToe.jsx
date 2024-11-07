import React, { useEffect, useState } from "react";

const TicTacToe = () => {
  const [winner, setWinner] = useState("");
  const [isXTurn, setIsXSTurn] = useState(true);
  const newGame = Array(9).fill("");
  const [squares, setSquares] = useState(newGame);
  const isDraw = !squares.some((val) => val === "") && !winner;
  console.log(isDraw);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkForWinnerOrDraw = () => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        setWinner(squares[a]);
        return;
      }
    }
  };
  useEffect(() => {
    checkForWinnerOrDraw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squares]);

  const onCellClick = (i) => {
    if (squares[i] || winner) return;
    const newSquares = [...squares];
    newSquares[i] = isXTurn ? "X" : "O";
    setSquares(newSquares);
    setIsXSTurn(!isXTurn);
  };
  const Square = (props) => {
    const { value, onClick, style } = props;
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100px", width: "100px", border: "5px solid white", ...style, color: "white" }} onClick={onClick} className="square">
        {value}
      </div>
    );
  };

  const reset = () => {
    setSquares(newGame);
    setWinner("");
    setIsXSTurn(true);
  };
  return (
    <>
      <h3>Tic Tac Toe</h3>

      <div>
        <header style={{ display: "flex", height: "100px", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <p>
            {winner && <p>{winner} is the winner</p>}
            {!squares.some((value) => value !== "") && "New Game"}
            {isDraw && "DRAW!"}
            <br />
            {!winner && !isDraw && `It is ${isXTurn ? "X" : "O"} turn`}
          </p>
        </header>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Square style={{ borderTop: 0, borderLeft: 0 }} value={squares[0]} onClick={() => onCellClick(0)} />
          <Square style={{ borderTop: 0 }} value={squares[1]} onClick={() => onCellClick(1)} />
          <Square style={{ borderTop: 0, borderRight: 0 }} value={squares[2]} onClick={() => onCellClick(2)} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Square style={{ borderLeft: 0 }} value={squares[3]} onClick={() => onCellClick(3)} />
          <Square value={squares[4]} onClick={() => onCellClick(4)} />
          <Square style={{ borderRight: 0 }} value={squares[5]} onClick={() => onCellClick(5)} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Square style={{ borderLeft: 0, borderBottom: 0 }} value={squares[6]} onClick={() => onCellClick(6)} />
          <Square style={{ borderBottom: 0 }} value={squares[7]} onClick={() => onCellClick(7)} />
          <Square style={{ borderBottom: 0, borderRight: 0 }} value={squares[8]} onClick={() => onCellClick(8)} />
        </div>
      </div>
      <button onClick={() => reset()}>Restet</button>
    </>
  );
};
export default TicTacToe;
