import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/bookworms/i);
  expect(linkElement).toBeInTheDocument();
});
