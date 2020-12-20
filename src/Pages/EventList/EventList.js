import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import resetIcon from '../../img/resetIcon.svg'
import { sortEvents } from './services/sortEvents'
import { filterEvents } from './services/filterEvents'
import { getFilteredEventList } from './services/getFilteredEventList'
import { getAvailableYears } from './services/getAvailableYears'
import EventItem from './components/EventItem'
import { UserContext } from "../../providers/UserProvider";
import useDeepCompareEffect from 'use-deep-compare-effect'

export default function EventList({
  eventArray,
  categoryFilter,
  eventFilter,
  chosenEventListFilter,
  eventSearch,
  multipleEventSearch,
  onTicketCheckboxClick,
  handleReloadButtonClick,
}) {
  const events = sortEvents(eventArray, eventFilter)
  const categoryfilteredEvents = filterEvents(events, categoryFilter)
  const filteredEventList = getFilteredEventList(
    {
      eventArray,
      eventFilter,
      chosenEventListFilter,
      eventSearch,
      multipleEventSearch,
      categoryfilteredEvents
    }
  )
  const availableYears = getAvailableYears(eventFilter, filteredEventList)
  const user = useContext(UserContext);
  useDeepCompareEffect(() => {
  }, [filteredEventList])


  return (
    <>
      {filteredEventList.length > 0 ? (
        availableYears.map((year) => (
          <EventContainer key={year}>
            <EventYearHeadline>Events {year}</EventYearHeadline>
            {filteredEventList.map(
              (event) =>
                event.eventStartDate.slice(0, 4) === year && (
                  user ?
                    <EventItem
                      event={event}
                      key={event.id}
                      id={event.id}
                      filteredEventList={filteredEventList}
                      onTicketCheckboxClick={onTicketCheckboxClick}
                    ></EventItem>
                    :
                    (<EventItem
                      event={event}
                      key={event.id}
                      id={event.id}
                    ></EventItem>)

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
