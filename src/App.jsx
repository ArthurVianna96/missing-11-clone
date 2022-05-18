import { useState, createContext, useEffect, useLayoutEffect } from 'react';
import './assets/css/App.css';

import Header from './components/header';
import Player from './components/player';
import PlayerModal from './components/modal';
import { parseDataForPitch, parseDataForStorage } from './utils/parseData';

export const AppContext = createContext();

function App() {
  const [players, setPlayers] = useState([]);
  const [playersArray, setPlayersArray] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [board, setBoard] = useState([[],[],[],[],[],[],[],[],[],[],[],[],[]]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const data = {
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
      { id: 10, name: 'vinijr' }],
  }

  useEffect(() => {
    setPlayersArray(parseDataForPitch(data));
    setPlayers(parseDataForStorage(data));
  }, []);

  useEffect(() => {
    setIsGameOver(players.every((player) => player.solved));
  }, [players])

  console.log(isGameOver);

  const receiveSelectedPlayer = (player) => {
    setSelectedPlayer(player);
  }

  const unselectPlayer = () => {
    setSelectedPlayer(null);
  }
  
  return (
    <div className="App">
      <Header />
      <AppContext.Provider value={{ players, setPlayers, board, setBoard }}>
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
            <PlayerModal player={selectedPlayer} callback={unselectPlayer}/>  
          )
        }
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
