import React from "react";
import { Link } from 'react-router-dom';

import '../../assets/fonts/Qatar2022Arabic-Bold.ttf';
import './gameTypeMenu.css';

const GameTypeMenu = () => {
  return (
    <div className="game-type-menu-page">
      <h1>Missing 11</h1>
      <div className="game-types-container">
        <Link className="game-type-card" to='/champions-league'>
          <div className="champions game-image"></div>
          <h4>Champions League Finals</h4>
        </Link>
        <Link className="game-type-card" to='/world-cup'>
          <div className="world-cup game-image"></div>
          <h4>World Cup Finals</h4>
        </Link>
      </div>
      <footer>Developed By Arthur Vianna</footer>
    </div>
  )
}

export default GameTypeMenu;