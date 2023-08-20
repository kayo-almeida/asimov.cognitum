import { render, screen } from '@testing-library/react';
import { HomeScreen } from './Home.screen';

test('renders hello world', () => {
  render(<HomeScreen />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
