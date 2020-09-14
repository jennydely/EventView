import React from 'react'
import EventItem from './EventItem'
import styled from 'styled-components/macro'
import { sortEvents } from '../services/sortEvents'
import { filterEvents } from '../services/filterEvents'
import { getFilteredEvents } from '../services/getFilteredEvents'
import { getAvailableYears } from '../services/getAvailableYears'

export default function EventList({
  eventArray,
  categoryFilter,
  eventFilter,
  onHideButtonClick,
  onDeleteButtonClick,
  onCheckboxClick,
}) {
  const events = sortEvents(eventArray, eventFilter)
  const categoryfilteredEvents = filterEvents(events, categoryFilter)
  const filteredEvents = getFilteredEvents(
    eventArray,
    eventFilter,
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
                  onCheckboxClick={onCheckboxClick}
                ></EventItem>
              )
          )}
        </EventContainer>
      ))}
    </>
  )
}

const EventContainer = styled.ul`
  display: grid;
  grid-template-columns: 316px 45px;
  margin: 0;
  padding: 0;
`
const EventYearHeadline = styled.h1`
  margin-bottom: 5px;
  padding: 0;
  text-align: left;
`
