// import dependencies
import React from 'react'
import '@testing-library/jest-dom';


// import react-testing methods
import {render, fireEvent, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import LeaderboardComponent from './Leaderboard'


test('Submit Score', async () => {
    const leaderboardComponent = render(<LeaderboardComponent />);

    // Submit Button should exist
    const submitButton = screen.getByText(/Add to Leaderboard/i);
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeVisible();

    // get the username and score
    let username = screen.getByPlaceholderText('Username');
    let score = screen.getByPlaceholderText('Score');

    // Write input and click button
    fireEvent.input(username, { target: { value: 'a test user' } });
    fireEvent.input(score, { target: { value: '123' } });
    fireEvent.click(submitButton);

    // Submission should be appeared on the screen
    const submission = screen.getByText(/a test user: 123/i);
    expect (submission).toBeVisible();

  })

