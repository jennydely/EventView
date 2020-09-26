import React from 'react'
import styled from 'styled-components/macro'
import { sortEvents } from './services/sortEvents'
import { filterEvents } from './services/filterEvents'
import { getFilteredEvents } from './services/getFilteredEvents'
import { getAvailableYears } from './services/getAvailableYears'
import EventItem from './components/EventItem'

export default function EventList({
  eventArray,
  categoryFilter,
  eventFilter,
  eventSearch,
  multipleEventSearch,
  onHideButtonClick,
  onEditButtonClick,
  onDeleteButtonClick,
  onTicketCheckboxClick,
}) {
  const events = sortEvents(eventArray, eventFilter)
  const categoryfilteredEvents = filterEvents(events, categoryFilter)
  const filteredEvents = getFilteredEvents(
    eventArray,
    eventFilter,
    eventSearch,
    multipleEventSearch,
    categoryfilteredEvents
  )
  const availableYears = getAvailableYears(eventFilter, filteredEvents)

  return (
    <>
      {availableYears.map((year) => (
        <EventContainer key={year}>
          <EventYearHeadline>Events {year}</EventYearHeadline>
          {filteredEvents.map(
            (event) =>
              event.eventStartDate.slice(0, 4) === year && (
                <EventItem
                  event={event}
                  key={event.id}
                  id={event.id}
                  onHideButtonClick={onHideButtonClick}
                  onDeleteButtonClick={onDeleteButtonClick}
                  onEditButtonClick={onEditButtonClick}
                  onTicketCheckboxClick={onTicketCheckboxClick}
                ></EventItem>
              )
          )}
        </EventContainer>
      ))}
    </>
  )
}

const EventContainer = styled.ul`
  margin: 0;
  padding: 0;
`
const EventYearHeadline = styled.h1`
  margin-bottom: 5px;
  padding: 0;
  text-align: left;
`
