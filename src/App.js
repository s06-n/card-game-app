import React from "react";
import './App.css';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <header>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <h1 className='title is-1 has-text-white'>Welcome to Group 3's Hi-Lo App</h1>
        </header>
      </div>

      <div>
        <h1 className='has-text-centered is-size-4 has-text-white '>About the project:</h1>
        <ul className="has-text-centered is-size-6 has-text-white has-text-weight-normal">
          <li>Group 3 is made up of Alice, Natalia, Sado, Shubby, Siobhan and Yanxin</li>
          <li>We have created a game that follows the same format of a game that is use as part of the game show "Play your Cards Right"</li> 
          <li>The game we have recreated is "Higher or Lower"</li>
          <li></li>
        </ul>
      </div>

      <div>
      <h1 className='has-text-centered is-size-4 has-text-white'>Here's how to play:</h1>
        <ol className="has-text-centered is-size-6 has-text-white has-text-weight-normal">
          <p className="is-size-6 has-text-weight-normal">Head over to the Game page <Link to="/game"><FontAwesomeIcon icon={faGamepad} size="2xl" style={{color: "#fcce2d"}} /></Link></p>
          <li class="is-size-5">Aim of the game:</li>
          <li>Guess whether the next card to be dealt will be higher or lower.</li>
          <li class="is-size-5">Rules:</li>
          <li>1. Click the 'Start Game' button.</li> 
          <li>2. Your first card will be revealed... you only have 60 seconds on the clock.</li>
          <li>3. Use the 'Higher' and 'Lower' buttons to bet whether the next card, will indeed be, Higher or Lower in value than the one displayed.</li>
          <li>KING IS HIGH, ACE IS LOW</li>
          <li>4. If you guess correctly, you guessed it, you get to move onto the next round and guess again!</li>
          <li>5. However, guess incorrectly at any point and it's GAME OVER!!</li>
          <li>6. Should you reveal a card of equal value, the game is ended and you must re-start the game.</li>
          <li>7. If you make all correct guesses, and make it to the end of the game, YOU WIN!</li>
          <li>Now, shall we play?!</li> 
        </ol>
      </div>

    <div className="dealer">
      <img src={process.env.PUBLIC_URL + '/cardDealer.png'} alt="man dealing cards" class="dealer"/>
    </div>

    <div>
      <h1 className='title is-spaced is-1 has-text-white'>GOOD LUCK!!</h1>
    </div>

    <div>
      <Footer/>
    </div>

    </>
  );
}

export default App;
