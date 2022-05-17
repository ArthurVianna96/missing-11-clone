import './assets/css/App.css';

import Header from './components/header';
import Player from './components/player';

function App() {
  const data = {
    formation: '4-4-3',
    players: ['courtois', 'carvajal', 'militao', 'alaba', 'marcelo', 'kroos', 'casemiro', 'modric', 'rodrygo', 'benzema', 'vini jr']
  }

  return (
    <div className="App">
      <Header />
      <div className='pitch'>
        <div className='players'>
          <Player playerName='courtois' />
        </div>
      </div>
    </div>
  );
}

export default App;
