import './assets/css/App.css';

import Header from './components/header';
import Player from './components/player';

function App() {
  const data = {
    formation: '4-4-3',
    players: [['courtois'], ['carvajal', 'militao', 'alaba', 'marcelo'], ['kroos', 'casemiro', 'modric'], ['rodrygo', 'benzema', 'vini jr']]
  }
  
  return (
    <div className="App">
      <Header />
      <div className='pitch'>
        <div className='players'>
          {data.players.map((section) => (<div className='players-row' key={section}>
            {section.map((player) => <Player playerName={player} key={player}/>)}
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default App;
