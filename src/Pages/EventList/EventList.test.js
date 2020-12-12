import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import EventList from './EventList'

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
      isStarred: true,
      visibility: 'public'
    },
    {
      id: '321',
      name: 'this is the eventname',
      location: 'this is the eventlocation',
      eventStartDate: '06/25/2021',
      eventEndDate: '06/28/2021',
      category: 'medieval',
      isHide: false,
      isStarred: false,
      visibility: 'public'
    },
  ]
  const categoryFilter = 'medieval'
  const eventFilter = 'Date'
  const chosenEventListFilter = 'Public'
  const eventSearch = ''
  const multipleEventSearch = ''
  const onTicketCheckboxClick = false


  it('displays the year and an example event', () => {
    const { getByText, getByAltText } = render(
      <EventList
        eventArray={eventArray}
        categoryFilter={categoryFilter}
        eventFilter={eventFilter}
        chosenEventListFilter={chosenEventListFilter}
        eventSearch={eventSearch}
        multipleEventSearch={multipleEventSearch}
        onTicketCheckboxClick={onTicketCheckboxClick}
      />
    )
    setTimeout(() => {
      expect(getByText('2020')).toBeInTheDocument()
      expect(getByText(eventArray[0].name)).toBeInTheDocument()
      expect(getByText(eventArray[0].location)).toBeInTheDocument()
      fireEvent.click(getByAltText('Hide'))
    })
  }, 100)

  it('renders correctly', () => {
    const tree = render(
      <EventList
        eventArray={eventArray}
        categoryFilter={categoryFilter}
        eventFilter={eventFilter}
        chosenEventListFilter={chosenEventListFilter}
        eventSearch={eventSearch}
        multipleEventSearch={multipleEventSearch}
        onTicketCheckboxClick={onTicketCheckboxClick}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
