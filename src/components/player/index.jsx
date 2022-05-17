import React, { useEffect, useState } from "react";

import './player.css';
import playerShirt from '../../assets/images/shirt.png';

const Player = ({ playerName }) => {
  const [tries, setTries] = useState(null);
  const [correctName, setCorrectName] = useState(false);
  const [shownText, setShownText] = useState('');

  const transformNameToDots = (name) => {
    let dots = '';
    const nameArray = name.split('');
    nameArray.forEach(() => dots += '*');
    return dots;
  }

  useEffect(() => {
    setShownText(correctName ? playerName : transformNameToDots(playerName));
  }, [correctName, playerName]);

  return (
    <div className="player">
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