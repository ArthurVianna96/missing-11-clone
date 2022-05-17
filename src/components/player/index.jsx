import React, { useState } from "react";

import './player.css';
import playerShirt from '../../assets/images/shirt.png';

const Player = ({ playerName }) => {
  const [tries, setTries] = useState(null);
  const [correctName, setCorrectName] = useState(false);

  return (
    <div className="player">
      <div className="shirt-container">
        <img src={playerShirt} alt="player-shirt" className="shirt" />
        <p className="number-of-tries">{ tries ? tries : '?' }</p>
        <div className="player-name-length">{ playerName.length }</div>
      </div>
      <input type={correctName ? 'text' : 'password'} className="player-name" value={playerName} />
    </div>
  );
}

export default Player;