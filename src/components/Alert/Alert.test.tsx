import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from './index';

test('alert text matches', () => {
  render(<Alert />);
  const alertElement = screen.getByTestId("alert");
  expect(alertElement).toHaveTextContent('Você deve aceitar os termos');
});