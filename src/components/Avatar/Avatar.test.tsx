/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './index';

test('render image', () => {
  render(<Avatar />);
  const avatarElement = screen.getByTestId("Avatar");
  expect(avatarElement).toHaveAttribute("src");
});