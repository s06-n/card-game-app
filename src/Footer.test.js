import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

test('renders the footer text', () => {
  render(<Footer />);
  const titleElement = screen.getByText(/Frequently Asked Questions/i);
  expect(titleElement).toBeInTheDocument();
});
