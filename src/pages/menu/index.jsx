import React from "react";
import { Link } from 'react-router-dom';

import './menu.css';
import Header from '../../components/header';
import data from '../../data';

const Menu = () => {
  return (
    <div className='menu-page'>
      <audio class='audio-control' controls autoPlay>
        <source src={require('../../assets/audio/champions-theme.mp3')} type="audio/mpeg" />
      </audio>
      <Header style={{flexDirection: 'column'}}>
        <h1>Missing 11</h1>
        <h2>Select a Champions League Final game</h2>
      </Header>
      <div className='game-selector'>
        {data.map(({ games, year }) => (
          <div className="year-container" key={year}>
            <h2 className="year">{`${year} final`}</h2>
            <div className="game-container">
              {games.map((game) =>
                <Link to={`game/${year}/${game.id}`} className='game-card' key={game.id}>
                  <img className='team-logo' src={game.emblem} alt={`${game.team} emblem`} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu;