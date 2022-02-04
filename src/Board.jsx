import React, {useState, useEffect} from 'react';
import Square from './Square';
import swal from 'sweetalert';


const initialState = ["", "", "", "", "", "", "", "", ""];

const Board = () => {

    const [gameState, setGameState] = useState(initialState);
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const onUserClicked = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = currentPlayer ? "X" : "O";
        setCurrentPlayer(!currentPlayer)
        setGameState(strings)
    }

    const clearGame = () => {
        setGameState(initialState)
    }

    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            clearGame();
            swal("Result", `Ta da ! ${winner} won the Game !`);
        }
    }, [gameState]) // eslint-disable-line react-hooks/exhaustive-deps

    const checkWinner = () => {
        const winningCombinations = [
             [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8],
             [0, 3, 6],
             [1, 4, 7],
             [2, 5, 8],
             [0, 4, 8],
             [2, 4, 6]
        ];
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

  return (

      <div className='app-header'>
        <h1 className='heading-text'>
            <span style={{color:'yellowgreen'}}>Tic</span>
            <span style={{color:'palevioletred'}}>Tac</span>
            <span style={{color: '#E27D60'}}>Toe</span>
        </h1>

        <div className='row jc-center'>
            <Square className='b-bottom-right' state={gameState[0]} onClick={() => onUserClicked(0)} />
            <Square className='b-bottom-right' state={gameState[1]} onClick={() => onUserClicked(1)}/>
            <Square className='b-bottom' state={gameState[2]} onClick={() => onUserClicked(2)}/>
         </div>

        <div className='row jc-center'>
            <Square className='b-bottom-right' state={gameState[3]} onClick={() => onUserClicked(3)}/>
            <Square className='b-bottom-right' state={gameState[4]} onClick={() => onUserClicked(4)} />
            <Square className='b-bottom' state={gameState[5]} onClick={() => onUserClicked(5)}/>
         </div>

        <div className='row jc-center'>
            <Square className='b-right' state={gameState[6]} onClick={() => onUserClicked(6)}/>
             <Square className='b-right' state={gameState[7]} onClick={() => onUserClicked(7)}/>
             <Square className='' state={gameState[8]} onClick={() => onUserClicked(8)}/>
        </div>

        <button className='clear-button' onClick={clearGame}>Reset</button>
        <p className='fc-aqua fw-600'>By Humza</p>
    </div>
  );
};

export default Board;
