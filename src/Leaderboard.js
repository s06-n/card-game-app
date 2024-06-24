import React, { useEffect, useState } from "react";
import './Leaderboard.css';
import Footer from './Footer';

// Function to add details to the leaderboard
function addDetailsToLeaderboard(game, username, score) {
  const existingDetails = JSON.parse(localStorage.getItem("leaderboard")) || {};
  if (!existingDetails[game]) {
    existingDetails[game] = {};
  }
  existingDetails[game][username] = score;
  localStorage.setItem("leaderboard", JSON.stringify(existingDetails));
}

// Function to get leaderboard details for a specific game
function getLeaderboard(game) {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || {};
  return leaderboard[game] || {};
}

// Function to clear leaderboard details for a specific game
function clearLeaderboard(game) {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || {};
  leaderboard[game] = {};
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

function LeaderboardComponent() {
  // States to manage game, username, score, leaderboard details, and blinking
  const [game, setGame] = useState("cardGame");
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");
  const [leaderboardDetails, setLeaderboardDetails] = useState({});
  const [isBlinking, setIsBlinking] = useState(false);

  // Function to handle game change
  const handleGameChange = (e) => {
    setGame(e.target.value);
    setLeaderboardDetails(getLeaderboard(e.target.value));
  };

  // UseEffect to simulate new scores and blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      const simulatedUsername = "User" + Math.floor(Math.random() * 100);
      const simulatedScore = Math.floor(Math.random() * 1000);
      addDetailsToLeaderboard(game, simulatedUsername, simulatedScore);
      setLeaderboardDetails(getLeaderboard(game));
    }, 5000);

    setIsBlinking(true);
    const timeout = setTimeout(() => {
      setIsBlinking(false);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [game]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addDetailsToLeaderboard(game, username, parseInt(score, 10));
    setLeaderboardDetails(getLeaderboard(game));
    setUsername("");
    setScore("");
  };

  return (
    
    <div className={`leaderboard-container ${isBlinking ? "blink" : ""}`}>
      <h1 className='title is-1 has-text-white'>Leaderboard</h1>

      <form onSubmit={handleSubmit}>
        <select value={game} onChange={handleGameChange}>
          <option value="">Select a Game</option>
          <option value="cardGame1">Card Game 1</option>
          <option value="cardGame2">Card Game 2</option>
        </select>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button type="submit">Add to Leaderboard</button>
      </form>
      <ul className="leaderboard-list">
        {Object.entries(leaderboardDetails).map(([user, userScore]) => (
          <li key={user}>
            {user}: {userScore}
          </li>
        ))}
      </ul>
      <button className="clear-button" onClick={() => clearLeaderboard(game)}>Clear Leaderboard</button>
      <Footer />
    </div>
  );
}

export default LeaderboardComponent;
