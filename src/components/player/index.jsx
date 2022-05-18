import React, { useEffect, useState } from "react";

import './player.css';
import playerShirt from '../../assets/images/shirt.png';

const Player = ({ playerName, callback, playerId, solved }) => {
  const [tries, setTries] = useState(null);
  const [shownText, setShownText] = useState('');

  const transformNameToDots = (name) => {
    let dots = '';
    const nameArray = name.split('');
    nameArray.forEach(() => dots += '*');
    return dots;
  }

  useEffect(() => {
    console.log(solved);
    setShownText(solved ? playerName : transformNameToDots(playerName));
  }, [solved, playerName]);

  return (
    <div className="player" onClick={() => callback({ id: playerId,  name: playerName })}>
      <div className="shirt-container">
        <img src={playerShirt} alt="player-shirt" className="shirt" />
        <p className="number-of-tries">{ tries ? tries : '?' }</p>
        <div className="player-name-length">{ playerName.length }</div>
      </div>
      <div className="player-name" >{ shownText }</div>
    </div>
  );
}

export default Player;