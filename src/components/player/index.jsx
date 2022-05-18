import React, { useEffect, useState, useContext } from "react";

import { AppContext } from '../../pages/GamePage';
import './player.css';
import playerShirt from '../../assets/images/shirt.png';

const Player = ({ playerName, callback, playerId }) => {
  const { players } = useContext(AppContext);
  const [tries, setTries] = useState(null);
  const [shownText, setShownText] = useState('');
  const [shownNameLength, setShownNameLenght] = useState('');

  const transformNameToDots = (name) => {
    let dots = '';
    const nameArray = name.split('');
    nameArray.forEach((character) => character === ' ' ? dots+= ' ' : dots += '*');
    return dots;
  }

  const nameLength = (name) => {
    const nameArray = name.split(' ');
    const nameLengthArray = [];
    nameArray.forEach((subName) => {
      nameLengthArray.push(subName.length);
    })
    return nameLengthArray.join(', ');
  }

  useEffect(() => {
    setShownText(players[playerId].solved ? playerName : transformNameToDots(playerName));
    setTries(players[playerId].attempts ? players[playerId].attempts : null);
    setShownNameLenght(nameLength(playerName));
  }, [players, playerName, playerId]);

  return (
    <div className="player" onClick={() => callback({ id: playerId,  name: playerName })}>
      <div className="shirt-container">
        <img src={playerShirt} alt="player-shirt" className="shirt" />
        <p className="number-of-tries">{ tries ? tries : '?' }</p>
        <div className="player-name-length">{shownNameLength}</div>
      </div>
      <div className="player-name" >{ shownText }</div>
    </div>
  );
}

export default Player;