import React, { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { useLocalStorage } from "../../hooks/localStorage";
import '../../assets/fonts/Qatar2022Arabic-Bold.ttf';
import './gameTypeMenu.css';

const GameTypeMenu = () => {
  const [score, setScore] = useLocalStorage('score', 0);
  const [championsGamesPlayed] = useLocalStorage('championsLeague', []);
  const [worldCupGamesPlayed] = useLocalStorage('worldCup', []);
  const [gameScore, setGameScore] = useState('');
  const [average, setAverage] = useState('');

  const sumScores = useCallback(() => {
    const worldCupScore = worldCupGamesPlayed.reduce((sum, { attempts }) => sum + attempts, 0);
    const championsScore = championsGamesPlayed.reduce((sum, { attempts }) => sum + attempts, 0);
    const total = worldCupScore + championsScore;
    setScore(total);
  }, [championsGamesPlayed, worldCupGamesPlayed, setScore]);

  useEffect(() => {
    sumScores();
    const worldCupGames = Object.keys(worldCupGamesPlayed).length;
    const championsGames = Object.keys(championsGamesPlayed).length;
    const totalGames = worldCupGames + championsGames;
    if (!totalGames) {
      return;
    }
    setGameScore(`Score is ${score} attempts in ${totalGames} games`);
    setAverage(`an average of ${(score / totalGames)} attempts per game`);
  }, [championsGamesPlayed, worldCupGamesPlayed, score, sumScores]);

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
      <h2>{gameScore}</h2>
      <h3>{average}</h3>
      
      <footer>Developed By Arthur Vianna</footer>
    </div>
  )
}

export default GameTypeMenu;