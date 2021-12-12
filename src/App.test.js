import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders h2', () => {
  render(<App />);
  expect(screen.getByText('What are your priorities?')).toBeInTheDocument();
});

test('click good and cheap should show "not happening anytime soon"', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Good'));
  fireEvent.click(screen.getByText('Cheap'));
  expect(
    screen.getByText('Good + cheap = not happening anytime soon')
  ).toBeInTheDocument();
});

test('click cheap and fast should show "lower quality work"', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Cheap'));
  fireEvent.click(screen.getByText('Fast'));
  expect(
    screen.getByText('Cheap + fast = lower quality work')
  ).toBeInTheDocument();
});

test('click good and fast should show "expensive"', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Good'));
  fireEvent.click(screen.getByText('Fast'));
  expect(screen.getByText('Fast + good = expensive')).toBeInTheDocument();
});
