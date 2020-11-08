import React from 'react'
import styled from 'styled-components/macro'
import resetIcon from '../../img/resetIcon.svg'
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
  onTicketCheckboxClick,
  handleReloadButtonClick,
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
      {filteredEvents.length > 0 ? (
        availableYears.map((year) => (
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
                    onTicketCheckboxClick={onTicketCheckboxClick}
                  ></EventItem>
                )
            )}
          </EventContainer>
        ))
      ) : (
          <>
            <p>No events</p>
            <ResetButton onClick={handleReloadButtonClick}>
              <img src={resetIcon} alt="reset" />
            </ResetButton>
          </>
        )}
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
const ResetButton = styled.button`
  align-self: center;
`
