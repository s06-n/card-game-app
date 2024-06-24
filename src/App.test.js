import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders the app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Welcome to Group 3's Hi-Lo App/i);
  expect(titleElement).toBeInTheDocument();
});
