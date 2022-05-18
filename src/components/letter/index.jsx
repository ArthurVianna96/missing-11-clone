import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../pages/GamePage';
import './letter.css';

const Letter = ({ letterPos, attemptValue, playerName, playerId, currentAttempt }) => {
  const { board, players } = useContext(AppContext);
  const [letterState, setLetterState] = useState(null);
  const letter = board[attemptValue][letterPos];

  useEffect(() => {
    const correct = playerName.split(' ').join('')[letterPos] === letter;
    const almost = !correct && playerName.includes(letter);
    if (players[playerId].attempts && players[playerId].attempts > attemptValue) {
      setLetterState((correct ? "correct" : almost ? "almost" : "wrong"));
    } else {
      currentAttempt.attempt > attemptValue && setLetterState((correct ? "correct" : almost ? "almost" : "wrong"));
    } 
  }, [currentAttempt, players, attemptValue, letter, letterPos, playerId, playerName])
  return (
    <div className="letter" id={letterState && letterState}>{letter}</div>
  )
}

export default Letter;