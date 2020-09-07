import React from 'react'
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import App from '../src/App'
import GlobalStyles from '../src/common/GlobalStyles'

export const decorators = [
  (Story) => (
    <>
    <GlobalStyles />
    <Story />
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

storiesOf('Params', module)
  .addDecorator(StoryRouter())
  .add('params', () => (
    <App/>
  ));