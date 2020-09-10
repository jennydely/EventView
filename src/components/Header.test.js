import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'
import 'jest-styled-components'

describe('Header', () => {
  const onSelectFilter = 'all'

  it('displays the sort by date function', () => {
    const { getByText } = render(<Header onSelectFilter={onSelectFilter} />)
    expect(getByText('date')).toBeInTheDocument()
  })
  it('renders correctly', () => {
    const tree = render(<Header onSelectFilter={onSelectFilter} />)
    expect(tree).toMatchSnapshot()
  })
})
