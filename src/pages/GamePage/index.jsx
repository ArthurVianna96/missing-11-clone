import { useState, createContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './gamePage.css';

import Header from '../../components/header';
import Player from '../../components/player';
import PlayerModal from '../../components/modal';
import GameOverModal from '../../components/gameModal';
import { parseDataForPitch, parseDataForStorage } from '../../utils/parseData';
import data from '../../data';

export const AppContext = createContext();

function GamePage() {
  const { year, gameId } = useParams();
  const [players, setPlayers] = useState([]);
  const [playersArray, setPlayersArray] = useState([]);
  const [isGameOver, setIsGameOver] = useState({ gameOver: false, message: '' });
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [board, setBoard] = useState([[],[],[],[],[],[],[],[],[],[],[],[],[]]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [gameData, setGameData] = useState(null);

  const receiveSelectedPlayer = (player) => {
    setSelectedPlayer(player);
  }

  const unselectPlayer = () => {
    setSelectedPlayer(null);
  }

  const loseGame = () => {
    unselectPlayer();
    const message = `Better luck next time`;
    setIsGameOver({ gameOver: true, message: message });
  };

  const findGameByYearAndId = (year, id) => {
    const gamesOfYear = data.find((years) => years.year === year);
    return gamesOfYear.games.find((game) => game.id === id);
  }

  useEffect(() => {
    setGameData(findGameByYearAndId(parseInt(year), parseInt(gameId)))
  }, [year, gameId]);

  useEffect(() => {
    if (gameData) {
      setPlayersArray(parseDataForPitch(gameData));
      setPlayers(parseDataForStorage(gameData));
    }
  }, [gameData]);

  useEffect(() => {
    if (players.length < 1) return;
    const didWinTheGame = players.every((player) => player.solved);
    // const didWinTheGame = true;
    if (didWinTheGame) { 
      const message = `Congratulations! you won the game in ${totalAttempts} guesses`;
      setIsGameOver({ gameOver: true, message: message });
    } else if (totalAttempts > 11 * 6) {
      const message = `Better luck next time`;
      setIsGameOver({ gameOver: true, message: message });
    }
  }, [players, totalAttempts]);
  
  return (
    <div className="game">
      <Header>
        <Link className='game-selector-button' to='/'>Game Selector</Link>
        <h1>Missing 11</h1>
        <img src={gameData ? gameData.emblem : ''} alt={`${gameData ? gameData.team : 'generic'} emblem`} width='80px'></img>
      </Header>
      <AppContext.Provider value={{ players, setPlayers, board, setBoard, totalAttempts, setTotalAttempts }}>
        {!selectedPlayer ? (
          <div className='pitch'>
            <div className='players'>
              {playersArray.map((section, index) => (<div className='players-row' key={index}>
                {section.map((player) => <Player playerId={player.id} playerName={player.name} key={player.id} callback={receiveSelectedPlayer} />)}
              </div>))}
            </div>
          </div>
          ) :
          (
            <PlayerModal player={selectedPlayer} callback={unselectPlayer} loseGameCallback={loseGame}/>  
          )
        }
        {isGameOver.gameOver && (
          <GameOverModal message={isGameOver.message} />
        )}
      </AppContext.Provider>
      
    </div>
  );
}

export default GamePage;
