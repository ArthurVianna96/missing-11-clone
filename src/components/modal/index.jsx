import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import './modal.css';
import Letter from "../letter";
import Keyboard from "../keyboard";

const PlayerModal = ({ player: { name: playerName, id: playerId }, callback }) => {
  const { board, setBoard, players, setPlayers } = useContext(AppContext);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: players[playerId].attempts, letterPos: 0 });
  
  const generateWhiteBoard = (numberOfLetters) => {
    const currentArray = [];
    const allreadyGuessed = players[playerId].guesses;
    const numberOfFilledRows = allreadyGuessed ? allreadyGuessed.length : 0;
    if (allreadyGuessed) {
      allreadyGuessed.forEach((guess) => {
        currentArray.push(guess.split(''));
      });
    }
    for (let row = 0; row < 6 - numberOfFilledRows; row += 1) {
      const rowArray = [];
      for (let column = 0; column < numberOfLetters; column += 1) {
        rowArray.push('');
      }
      currentArray.push(rowArray);
    }
    return currentArray;
  };

  const onSelectLetter = (selectedLetter) => {
    const { attempt, letterPos } = currentAttempt;
    if (letterPos > playerName.length - 1) return;
    const newBoard = [...board];
    newBoard[attempt][letterPos] = selectedLetter;
    setBoard(newBoard);
    setCurrentAttempt(previous => ({ attempt: previous.attempt, letterPos: previous.letterPos + 1 }));
  }

  const onDelete = () => {
    const { attempt, letterPos } = currentAttempt;
    if (letterPos === 0) return;
    const newBoard = [...board];
    newBoard[attempt][letterPos - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt(previous => ({ attempt: previous.attempt, letterPos: previous.letterPos - 1 }));
  }

  const validateRow = () => {
    const receivedWord = board[currentAttempt.attempt].join('');
    return receivedWord === playerName;
  }

  const onEnter = () => {
    const { letterPos, attempt } = currentAttempt;
    if (letterPos !== playerName.length) return;
    const receivedWord = board[attempt].join('');
    const guesses = players[playerId].guesses;

    setCurrentAttempt(previous => ({ attempt: previous.attempt + 1, letterPos: 0 }));

    let newGuessArray;
    if (!guesses) {
      newGuessArray = [receivedWord];
    } else {
      const newGuess = [...guesses, receivedWord];
      newGuessArray = newGuess;
    }
    setPlayers(() => [...players], players[playerId].guesses = newGuessArray, players[playerId].attempts +=1);

    const isNameCorrect = validateRow();
    if (isNameCorrect) {
      setPlayers(() => [...players], players[playerId].solved = true);
      setTimeout(() => {
        callback();
      }, 300);
    } 
  }

  const receiveSelectedLetter = (selectedLetter) => {
    if (selectedLetter === 'enter') {
      onEnter();
    } else if (selectedLetter === 'delete') {
      onDelete();
    }
    else {
      onSelectLetter(selectedLetter);
    }
  };

  useEffect(() => {
    const numberOfLetters = playerName.length;
    const newBoard = generateWhiteBoard(numberOfLetters);
    setBoard(newBoard);
  }, []);

  return (
    <div className="modal">
      <button onClick={callback}>Voltar</button>
      <div className='attempts'>
        <div className="attempt-row">
          {playerName.split('').map((letter, index) => <Letter key={index} currentAttempt={players[playerId].attempts} playerName={playerName} attemptValue={0} letterPos={index} playerId={playerId}/>)}
        </div>
        <div className="attempt-row">
          {playerName.split('').map((letter, index) => <Letter key={index} currentAttempt={players[playerId].attempts} playerName={playerName} attemptValue={1} letterPos={index} playerId={playerId}/>)}
        </div>
        <div className="attempt-row">
          {playerName.split('').map((letter, index) => <Letter key={index} currentAttempt={players[playerId].attempts} playerName={playerName} attemptValue={2} letterPos={index} playerId={playerId}/>)}
        </div>
        <div className="attempt-row">
          {playerName.split('').map((letter, index) => <Letter key={index} currentAttempt={players[playerId].attempts} playerName={playerName} attemptValue={3} letterPos={index} playerId={playerId}/>)}
        </div>
        <div className="attempt-row">
          {playerName.split('').map((letter, index) => <Letter key={index} currentAttempt={players[playerId].attempts} playerName={playerName} attemptValue={4} letterPos={index} playerId={playerId}/>)}
        </div>
        <div className="attempt-row">
          {playerName.split('').map((letter, index) => <Letter key={index} currentAttempt={players[playerId].attempts} playerName={playerName} attemptValue={5} letterPos={index} playerId={playerId}/>)}
        </div>
      </div>
      <Keyboard callback={receiveSelectedLetter} onSelectLetter={onSelectLetter} onEnter={onEnter} onDelete={onDelete}/>
    </div>
  )
}

export default PlayerModal;