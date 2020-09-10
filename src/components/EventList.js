import React from 'react'
import EventItem from './EventItem'
import styled from 'styled-components/macro'
import { sortEvents } from '../services/sortEvents'
import { filterEvents } from '../services/filterEvents'
import { getYearsOfEvents } from '../services/getYearsOfEvents'

export default function EventList({ eventArray, categoryFilter, eventFilter }) {
  const events = sortEvents(eventArray, eventFilter)
  const filteredEvents = filterEvents(events, categoryFilter)
  const availableYears = getYearsOfEvents(filteredEvents)

  return (
    <>
      {availableYears.map((year) => (
        <EventContainer key={year}>
          <EventYearHeadline>Events {year}</EventYearHeadline>
          {filteredEvents.map(
            (event) =>
              event.eventStartDate.slice(0, 4) === year && (
                <EventItem event={event} key={event.id}></EventItem>
              )
          )}
        </EventContainer>
      ))}
    </>
  )
}

const EventContainer = styled.ul`
  display: grid;
  grid-template-columns: auto 50px;
  margin: 10px;
  padding: 0;
`
const EventYearHeadline = styled.h1`
  margin-bottom: 5px;
  padding: 0;
  text-align: left;
`
