import React from 'react'
import { render } from '@testing-library/react'
import EventList from './EventList'
import 'jest-styled-components'

describe('EventList', () => {
  const eventArray = [
    {
      id: '123',
      name: 'this is the eventname',
      location: 'this is the eventlocation',
      eventStartDate: '06/25/2020',
      eventEndDate: '06/28/2020',
      category: 'medieval',
    },
    {
      id: '321',
      name: 'this is the eventname',
      location: 'this is the eventlocation',
      eventStartDate: '06/25/2021',
      eventEndDate: '06/28/2021',
      category: 'medieval',
    },
  ]
  const categoryFilter = 'medieval'

  it('displays the year and an example event', () => {
    const { getByText } = render(
      <EventList eventArray={eventArray} categoryFilter={categoryFilter} />
    )
    setTimeout(() => {
      expect(getByText('2020')).toBeInTheDocument()
      expect(getByText(eventArray[0].name)).toBeInTheDocument()
      expect(getByText(eventArray[0].location)).toBeInTheDocument()
    }, 100)
  })
  it('renders correctly', () => {
    const tree = render(
      <EventList eventArray={eventArray} categoryFilter={categoryFilter} />
    )
    expect(tree).toMatchSnapshot()
  })
})
