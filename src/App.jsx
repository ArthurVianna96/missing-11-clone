import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './assets/css/App.css';
import Menu from './pages/menu';
import GamePage from './pages/GamePage';

function App() {

  return (
    <Router>  
      <div className="App">
        <Routes>
          <Route path="/game/:year/:gameId" element={<GamePage />} />   
          <Route path="/" element={<Menu/>}/>   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
