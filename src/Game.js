import React, { useState, useEffect } from 'react';
import './Game.css';
import Footer from './Footer';
import myGif from './card-shuffle-bw.gif';

function Game() {
  const [countdown, setCountdown] = useState(60) // timer
  const [deckId, setDeckId] = useState('');
  const [cards, setCards] = useState([]); // To store the card data
  const [flippedCards, setFlippedCards] = useState([false, false, false, false, false, false]); // Start with all cards face down

  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Index of the current card being compared
  const [comparisonResult, setComparisonResult] = useState(''); // For higher, lower and swap
  const [gameState, setGameState] = useState('start'); // Start with the start state
  const [gameStart, setGameStart] = useState(false); 
  const [correctGuesses, setCorrectGuesses] = useState(0); // keeps a track of correct guesses
  const [gameStarted, setGameStarted] = useState(false); 

  useEffect(() => {
    if (gameState === 'over') {
      setGameStarted(false);
    }
  }, [gameState]);

  useEffect(() => {
    setGameStarted(true);
  }, []);

  // check for draw
  const checkForDraw = (currentCardValue, nextCardValue, nextCardIndex) => {
    if (currentCardValue === nextCardValue) { // checks whether the two most recent cards are of equal value
      setComparisonResult('DRAW - please restart the game.');
      setGameState('over');
      setGameStart(false);

      // flip draw cards ensures that when there is a pair, the next card flips up the pair is visible
      setFlippedCards(updatedFlippedCards => {
        const updated = [...updatedFlippedCards];
        updated[currentCardIndex] = true;
        updated[nextCardIndex] = true;
        return updated;
      });
      return true;
    }
    return false;
  };


  // timer section
  useEffect(() => {
    if (gameStart && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(interval); // clearing interval for when countdown stops
    }
    if (countdown === 0) {
      setGameState('over');
      setGameStart(false);
      setCountdown(60); // resetting the countdown
      setComparisonResult(`GAME OVER! You're out of time!`);
    }
  }, [gameStart, countdown]);

  // start game logic for the start button and to flip the first card
  const startGame = () => {
    setGameStart(true);
    setGameStarted(true)
    setGameState('choice');
    setFlippedCards([true, false, false, false, false, false])
    setCurrentCardIndex(0);
    setCorrectGuesses(0);
    setComparisonResult('');
    setCountdown(60); // resetting the countdown here
  }

  const cardValueMap = { // added to stop incorrect answers in game
    'ACE': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'JACK': 11,
    'QUEEN': 12,
    'KING': 13
  };
  
  // Log current card value when the page loads
  useEffect(() => {
    if (cards.length > 0) {
      const currentCardValue = cardValueMap[cards[currentCardIndex].value];
      console.log('Current Card Value (Page Load):', currentCardValue);
    }
  }, [cards, currentCardIndex]);  

  // Fetch deck
  useEffect(() => {
    if ( (gameState === 'start'|| gameStart)){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(data => {
        setDeckId(data.deck_id);
      })
      .catch(error => {
        console.error('Error fetching deck:', error);
      });
    }
  }, [gameState, gameStart]);

  // Fetches 6 cards
  useEffect(() => {
    if (deckId && (gameState === 'start' || gameStart)) {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=6`) // Change count as needed
        .then(response => response.json())
        .then(data => {
          setCards(data.cards);
        })
        .catch(error => {
          console.error('Error fetching cards:', error);
        });
    }
  }, [deckId]);

  // Game logic
  const handleGameButtonClick = chosenState => {
    if (gameState === 'choice') {
      const nextCardIndex = currentCardIndex + 1;

    if (nextCardIndex >= cards.length) {
      setGameState('over');
      setGameStart(false);
      return;
    }

    const currentCardValue = cardValueMap[cards[currentCardIndex].value];
    const nextCardValue = cardValueMap[cards[nextCardIndex].value];

    // check whether the cards are of equal value
    if (checkForDraw(currentCardValue, nextCardValue, nextCardIndex)) {
      return;
    }
    

    if (currentCardValue === nextCardValue) { // if the cards are of current value - game restarts
      setComparisonResult('DRAW - please restart the game.');
      setGameState('over');
      setGameStart(false);

      setFlippedCards(updatedFlippedCards => {
        const updated = [...updatedFlippedCards];
        updated[currentCardIndex] = true;
        updated[nextCardIndex] = true;
        return updated;
      });
      return;
    }
      
      if (checkForDraw(currentCardValue, nextCardValue)) {
        return;
      }

      if (
        (chosenState === 'higher' && nextCardValue > currentCardValue) || // checks whether the button click matches the drawn card
        (chosenState === 'lower' && nextCardValue < currentCardValue) // if it does, this is a 'correct' choice
      ) {
        setCurrentCardIndex(nextCardIndex);
        setComparisonResult('Correct! Choose again.');
        setCorrectGuesses(prevCorrectGuesses => prevCorrectGuesses + 1);
        console.log(`Correct guesses1: ${correctGuesses}`);
        console.log(`cards.length: ${cards.length}`);

      } else {
        console.log('Next Card Value:', nextCardValue);
        console.log('Current Card Value:', currentCardValue);
        setComparisonResult('Incorrect choice. GAME OVER.');
        setGameState('over');
        setGameStart(false);
      }
      
      setFlippedCards(updatedFlippedCards => {
        const updated = [...updatedFlippedCards];
        updated[nextCardIndex] = true;
        console.log(updated);
        return updated;
      });
    }
  };

  // checks if user has correctly five times in a row and that every card is flipped over to win the game
  if (correctGuesses >= 5 && flippedCards.every(card => card === true)){
    setComparisonResult('YOU WIN! WELL DONE!🎉');
    setGameState('over');
    setGameStart(false);
    setCorrectGuesses(0);
    return;
  }

  return (
    <div className="green_back">
      <header>
      <h1 className='title is-1 has-text-white'>Play Hi-Lo</h1>
      <div className='timer'>Time Remaining: {countdown}s</div> 
      </header>
      <div className="splitScreen">
        <div className="leftPane">
          <div className="gridContainerLeft">
            {cards.length > 0 ? (
              flippedCards.map((isFlipped, index) => (
                <div
                  key={index}
                  className={`cardContainer ${isFlipped ? 'flipped' : ''}`}
                >
                  <div className={`card ${isFlipped ? 'back' : 'front'}`}>
                    {isFlipped ? (
                      <img
                        src={cards[index].image}
                        alt={cards[index].code}
                        style={{
                          width: '100%',
                          height: '103%',
                          margin: 'auto',
                          display: 'block',
                          paddingTop: '0%',
                        }} // styling for size
                      />
                    ) : (
                      <img
                        src="https://www.deckofcardsapi.com/static/img/back.png"
                        alt="Card Back"
                        style={{
                          width: '100%',
                          height: '103%',
                          margin: 'auto',
                          display: 'block',
                          paddingTop: '0%',
                        }} // styling for size
                      />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Loading cards...</p>
            )}
            <p>King is high, Ace is low!</p>
          </div>
        </div>
  
        <div className="rightPane">
          <div className="gridContainerRight">
            <div className="blankRowA">
              {(gameStarted && gameState !== 'choice') || gameState === 'over' ? (
                <img src={myGif} alt="card deck shuffling" />
              ) : null}
            </div>
  
            <div className="blankRowB">
              {comparisonResult && (
                <div className="comparisonResult">{comparisonResult}</div>
              )}
              {gameState === 'over' && !comparisonResult && (
                <div className="comparisonResult">Incorrect choice. GAME OVER.</div>
              )}
              <div></div>


            </div>
  
            <div className="blankRowC">
              <div className="gameButtonContainer">
                <button
                  className="gameButton higher"
                  onClick={() => handleGameButtonClick('higher')}
                  disabled={gameState === 'over'}
                >
                  ❤️Higher♦︎
                </button>
              </div>
  
              <div className="gameButtonContainer">
                <button
                  className="gameButton lower"
                  onClick={() => handleGameButtonClick('lower')}
                  disabled={gameState === 'over'}
                >
                  ♠︎Lower♣︎
                </button>
              </div>
            </div>
              {gameState === 'start' || gameState === 'over' ? (
                  <div className="gameButtonContainer">
                    <button className="gameButton start" onClick={startGame}>
                      Start Game
                    </button>
                  </div>
                ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  
}

export default Game;
