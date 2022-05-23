import React from 'react';
import { useNavigate } from 'react-router-dom';

import './gameModal.css';

const GameOverModal = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className='game-over-modal'>
      <div className='game-over-container'>
        <p className='game-over-message'>{ message }</p>
        <p className='credits'>Developed by Arthur Vianna</p>
        <button onClick={() => navigate(-1)}>CLOSE</button>
      </div>

    </div>
  )
}

export default GameOverModal;