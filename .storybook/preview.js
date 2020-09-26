import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import StoryRouter from 'storybook-react-router'

export const decorators = [
  StoryRouter(),
  (Story) => (
    <>
      <GlobalStyles />

      <Story />
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
