import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'
import 'jest-styled-components'

describe('Header', () => {
  const onSelectFilter = 'all'
  const eventArray = [
    {
      id: '123',
      name: 'this is the eventname',
      location: 'this is the eventlocation',
      eventStartDate: '06/25/2020',
      eventEndDate: '06/28/2020',
      category: 'medieval',
      isHide: false,
    },
    {
      id: '321',
      name: 'this is the eventname',
      location: 'this is the eventlocation',
      eventStartDate: '06/25/2021',
      eventEndDate: '06/28/2021',
      category: 'medieval',
      isHide: false,
    },
  ]

  it('displays the sort by date function', () => {
    const { getByText } = render(
      <Header onSelectFilter={onSelectFilter} eventArray={eventArray} />
    )
    expect(getByText('date')).toBeInTheDocument()
  })
  it('renders correctly', () => {
    const tree = render(
      <Header onSelectFilter={onSelectFilter} eventArray={eventArray} />
    )
    expect(tree).toMatchSnapshot()
  })
})
