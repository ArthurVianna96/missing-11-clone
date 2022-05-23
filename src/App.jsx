import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './assets/css/App.css';
import GameTypeMenu from './pages/game-type-menu';
import GamesMenu from './pages/games-menu';
import GamePage from './pages/GamePage';

function App() {

  return (
    <Router>  
      <div className="App">
        <Routes> 
          <Route path=":type" exact element={<GamesMenu />} />
          <Route path=":type/:year/:gameId" element={<GamePage />} />  
          <Route path="/" element={<GameTypeMenu/>}/>   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
