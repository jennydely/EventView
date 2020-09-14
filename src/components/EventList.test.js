import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import EventList from './EventList'
import 'jest-styled-components'

describe('EventList', () => {
  const onHideButtonClick = jest.fn()
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
  const categoryFilter = 'medieval'

  it('displays the year and an example event', () => {
    const { getByText, getByAltText } = render(
      <EventList
        eventArray={eventArray}
        categoryFilter={categoryFilter}
        onHideButtonClick={onHideButtonClick}
      />
    )
    setTimeout(() => {
      expect(getByText('2020')).toBeInTheDocument()
      expect(getByText(eventArray[0].name)).toBeInTheDocument()
      expect(getByText(eventArray[0].location)).toBeInTheDocument()
      fireEvent.click(getByAltText('Hide'))
      expect(onHideButtonClick).toHaveBeenCalled()
    })
  }, 100)

  it('renders correctly', () => {
    const tree = render(
      <EventList
        eventArray={eventArray}
        categoryFilter={categoryFilter}
        onHideButtonClick={onHideButtonClick}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
