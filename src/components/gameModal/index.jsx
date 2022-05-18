import React from 'react';

import './gameModal.css';

const GameOverModal = ({ message }) => {
  return (
    <div className='game-over-modal'>
      <div className='game-over-container'>
        <p className='game-over-message'>{ message }</p>
        <p className='credits'>Developed by Arthur Vianna</p>
      </div>
    </div>
  )
}

export default GameOverModal;