import { render, screen } from '@testing-library/react';
import About from './components/About';

test('renders Audry and Rog pic link', () => {
  render(<About />);
  const linkElement = screen.getByText(/Audry/i);
  expect(linkElement).toBeInTheDocument();
});
