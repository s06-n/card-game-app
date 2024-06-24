// import dependencies
import React from 'react'
import '@testing-library/jest-dom';


// import react-testing methods
import {render, fireEvent, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import Game from './Game'


test('Start Game button will flip a card over', async () => {
    const game = render(<Game />);

    // Start Game should exist
    const startButton = screen.getByText(/Start Game/i);
    expect(startButton).toBeInTheDocument();
    expect(startButton).toBeVisible();

    // All cards should be face-down
    let unflippedCards = screen.findAllByAltText(/Card Back/i);
    expect ((await unflippedCards).length).toBe(6)

    // Click button
    fireEvent.click(startButton);
    // Hidden after clicking
    expect(startButton).not.toBeVisible();
    // One of the cards should now be flipped
    unflippedCards = screen.findAllByAltText(/Card Back/i);
    expect ((await unflippedCards).length).toBe(5)
  })

