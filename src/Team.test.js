// import dependencies
import React from 'react'
import '@testing-library/jest-dom';


// import react-testing methods
import {render, fireEvent, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import Team from './Team'

test('check the name card will flip over', async () => {
    const team = render(<Team />);
    
    const name = screen.getByText(/Yanxin/i);
    expect(name).toBeInTheDocument();

    fireEvent.click(name);

    let intro = screen.getByText(/I am a cat person./i);
    expect(intro).toBeVisible();
})