import React, { useEffect, useState, useContext } from "react";

import { AppContext } from "../../App";
import './player.css';
import playerShirt from '../../assets/images/shirt.png';

const Player = ({ playerName, callback, playerId }) => {
  const { players } = useContext(AppContext);
  const [tries, setTries] = useState(null);
  const [shownText, setShownText] = useState('');

  const transformNameToDots = (name) => {
    let dots = '';
    const nameArray = name.split('');
    nameArray.forEach(() => dots += '*');
    return dots;
  }

  useEffect(() => {
    setShownText(players[playerId].solved ? playerName : transformNameToDots(playerName));
    setTries(players[playerId].attempts ? players[playerId].attempts : null);
  }, [players, playerName, playerId]);

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