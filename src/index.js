import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Team from './Team';
import Game from './Game';
import LeaderboardComponent from './Leaderboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faPeopleGroup, faGamepad, faTableList } from '@fortawesome/free-solid-svg-icons';

const Routing = () => {
  return(
    <Router>
      <div className='green-back'>
        <div>
          <div className='nav-container'>
            <nav>
                <ul className="navbar">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link-white">
                    <FontAwesomeIcon icon={faHouseChimney} size="2xl" style={{color: "#cc1e1e",}} /></Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/team" className="nav-link-white">
                      <FontAwesomeIcon icon={faPeopleGroup} size="2xl" style={{color: "#000000",}} /></Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/game" className="nav-link-white">
                      <FontAwesomeIcon icon={faGamepad} size="2xl" style={{color: "#fcce2d",}} /></Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/leaderboard" className="nav-link-white">
                      <FontAwesomeIcon icon={faTableList} size="2xl" style={{color: "#000000",}} /></Link>
                  </li>
                </ul>
              </nav>
          </div>

          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/team" element={<Team />} />
            <Route path="/game" element={<Game />} />
            <Route path="/leaderboard" element={<LeaderboardComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
