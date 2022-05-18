import { useState, createContext, useEffect } from 'react';
import './assets/css/App.css';

import Header from './components/header';
import Player from './components/player';
import PlayerModal from './components/modal';
import GameOverModal from './components/gameModal';
import { parseDataForPitch, parseDataForStorage } from './utils/parseData';

export const AppContext = createContext();

function App() {
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

  useEffect(() => {
    setGameData({
      formation: '1-4-3-3',
      players: [
        { id: 0, name: 'courtois' },
        { id: 1, name: 'carvajal' },
        { id: 2, name: 'militao' },
        { id: 3, name: 'alaba' },
        { id: 4, name: 'marcelo' },
        { id: 5, name: 'kroos' },
        { id: 6, name: 'casemiro' },
        { id: 7, name: 'modric' },
        { id: 8, name: 'rodrygo' },
        { id: 9, name: 'benzema' },
        { id: 10, name: 'vini jr' }],
    })
  }, []);

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
    <div className="App">
      <Header />
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

export default App;
