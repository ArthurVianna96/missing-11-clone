import React from "react";
import { Link } from 'react-router-dom';

import './menu.css';
import Header from '../../components/header';
import data from '../../data';

const Menu = () => {
  return (
    <>
      <Header style={{flexDirection: 'column'}}>
        <h1>Missing 11</h1>
        <h2>Select a Champions League Final game</h2>
      </Header>
      <div className='game-selector'>
        {data.map((game) => (
          <Link to={`game/${game.id}`} className='game-card' key={game.id}>
            <img className='team-logo' src={game.emblem} alt={game.team} />
            <h3>{game.date}</h3>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Menu;