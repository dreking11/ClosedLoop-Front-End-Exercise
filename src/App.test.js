import { render, screen } from '@testing-library/react';
import App from './App';

test('renders region text', () => {
  render(<App />);
  const regionText = screen.getByText(/region/i);
  expect(regionText).toBeInTheDocument();
});
