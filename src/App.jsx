import { useState, createContext, useEffect } from 'react';
import './assets/css/App.css';

import Header from './components/header';
import Player from './components/player';
import PlayerModal from './components/modal';

export const AppContext = createContext();

function App() {
  const [players, setPlayers] = useState([]);
  const [board, setBoard] = useState([[],[],[],[],[],[],[],[],[],[],[],[],[]]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const data = {
    formation: '4-4-3',
    players: [
      [{ id: 0, name: 'courtois' }],
      [{ id: 1, name: 'carvajal' }, { id: 2, name: 'militao' }, { id: 3, name: 'alaba' }, { id: 4, name: 'marcelo' }],
      [{ id: 5, name: 'kroos' }, { id: 6, name: 'casemiro' }, { id: 7, name: 'modric' }],
      [{id: 8, name: 'rodrygo'}, {id: 9, name: 'benzema'}, {id: 10, name: 'vini jr'}]],
  }

  useEffect(() => {
    const playersSingleArray = [].concat(...data.players);
    const playersObj = playersSingleArray.map((player) => ({
      id: player.id,
      name: player.name
    }));
    setPlayers(playersObj);
  }, []);

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
              {data.players.map((section) => (<div className='players-row' key={section}>
                {section.map((player) => <Player playerId={player.id} playerName={player.name} key={player.id} callback={receiveSelectedPlayer} solved={player.solved}/>)}
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
