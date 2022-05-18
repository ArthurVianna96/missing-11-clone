import React, { useContext } from 'react';

import { AppContext } from '../../App';
import './letter.css';

const Letter = ({ letterPos, attemptValue, playerName, currentAttempt }) => {
  const { board,  } = useContext(AppContext);
  const letter = board[attemptValue][letterPos];

  const correct = playerName[letterPos] === letter;
  const almost = !correct && playerName.includes(letter);
  const letterState = currentAttempt.attempt > attemptValue && (correct ? "correct" : almost ? "almost" : "wrong")
  return (
    <div className="letter" id={letterState && letterState}>{letter}</div>
  )
}

export default Letter;