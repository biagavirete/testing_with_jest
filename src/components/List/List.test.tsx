import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './index';

test('list contains at least one item', () => {
  render(<List />);
  const ulElement = screen.getByTestId("list");
  const liElement = screen.getByTestId("repository")
  expect(ulElement).toContainElement(liElement);
});