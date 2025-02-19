import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './App';

test('renders learn Jenkins link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});
