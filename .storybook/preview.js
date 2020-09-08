import React from 'react'
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
