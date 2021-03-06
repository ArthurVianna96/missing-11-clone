import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

import './games-menu.css';
import Header from '../../components/header';
import championsLeagueData from "../../data/champions-league-games";
import worldCupData from "../../data/world-cup-data";
import { useLocalStorage } from "../../hooks/localStorage";

const GamesMenu = () => {
  const { type } = useParams();
  const [gameTypeData, setGameTypeData] = useState([]);
  const [championsLeagueGames] = useLocalStorage('championsLeague', []);
  const [worldCupGames] = useLocalStorage('worldCup', []);
  const [markedGames, setMarkedGames] = useState([]);

  useEffect(() => {
    const selectedGameType = type === 'world-cup' ? worldCupData : championsLeagueData;
    const selectedMarkedGames = type === 'world-cup' ? worldCupGames : championsLeagueGames;
    setGameTypeData(selectedGameType);
    setMarkedGames(selectedMarkedGames);
  }, [type, worldCupGames, championsLeagueGames]);

  return (
    <div className={`menu-page ${type}-bg`}>
      {type === 'world-cup' ?
        <audio className='audio-control' controls autoPlay muted>
          <source src={require('../../assets/audio/waka-waka.mp3')} type="audio/mpeg" />
        </audio>
        :
        <audio className='audio-control' controls autoPlay muted>
          <source src={require('../../assets/audio/champions-theme.mp3')} type="audio/mpeg" />
        </audio>
      }
      <Header>
        <Link to='/' style={{color: "white"}}>Game Type Selector</Link>
        <h1 style={{textAlign: 'center'}}>Missing 11</h1>
        <div style={{textTransform: 'capitalize'}}>{type.split('-').join(' ')}</div>
      </Header>
      <h2 className="subtitle">Select a {type.split('-').join(' ')} final game</h2>
      <div className='game-selector'>
        {gameTypeData.map(({ games, year }) => (
          <div className="year-container" key={year}>
            <h2 className="year">{`${year} final`}</h2>
            <div className="game-container">
              {games.map((game) =>
                <Link to={`${year}/${game.id}`} className='game-card' key={game.id}>
                  {markedGames.some(({ id }) => id ===`${game.id}`) && <div className="marked">???</div>}
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

export default GamesMenu;