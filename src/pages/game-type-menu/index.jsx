import React, { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { useLocalStorage } from "../../hooks/localStorage";
import '../../assets/fonts/Qatar2022Arabic-Bold.ttf';
import './gameTypeMenu.css';

const GameTypeMenu = () => {
  const [score, setScore] = useLocalStorage('score', 0);
  const [championsGamesPlayed] = useLocalStorage('championsLeague', []);
  const [worldCupGamesPlayed] = useLocalStorage('worldCup', []);
  const [gameScore, setGameScore] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [average, setAverage] = useState(0);

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
    const totalPlayedGames = worldCupGames + championsGames;
    if (!totalPlayedGames) {
      return;
    }
    setGameScore(score);
    setTotalGames(totalPlayedGames);
    setAverage((score / totalPlayedGames).toFixed(2));
  }, [championsGamesPlayed, worldCupGamesPlayed, score, sumScores]);

  return (
    <div className="game-type-menu-page">
      <h1>Missing 11</h1>
      <div className="content">
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
        <div className="score-container">
          <h2>Your score is <b>{gameScore}</b> attempts in <b>{totalGames}</b> games</h2>
          <h3>An average of <b>{average}</b> attempts per game</h3>
        </div>
      </div>
      <footer>Developed By Arthur Vianna</footer>
    </div>
  )
}

export default GameTypeMenu;