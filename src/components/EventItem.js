import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import useHeight from './useHeight'
import styled from 'styled-components/macro'
import { formatDate } from '../services/date'
import EventDetails from './EventDetails'
import eyeIcon from '../img/eyeIcon.svg'
import hideEyeIcon from '../img/hideEyeIcon.svg'
import getColorByName from '../services/getColorByName'

export default function EventItem({
  event,
  id,
  onHideButtonClick,
  onDeleteButtonClick,
  onTicketCheckboxClick,
}) {
  const { name, location, category, eventStartDate, eventEndDate } = event
  const { height, bind } = useHeight([event])
  const [isEventDetailVisible, setIsEventDetailVisible] = useState(false)
  const detailStyle = {
    ...useSpring({
      height: isEventDetailVisible ? height : 0,
    }),
  }

  return (
    <>
      <Event>
        <EventHeader name={category} onClick={toggleEventDetail}>
          <h2>~ {name} ~</h2>
          <h3>{location}</h3>
          <h3>{formatDate(eventStartDate, eventEndDate)}</h3>
        </EventHeader>
        <EventDetails
          event={event}
          style={detailStyle}
          bind={bind}
          onDeleteButtonClick={onDeleteButtonClick}
          onTicketCheckboxClick={onTicketCheckboxClick}
        />
      </Event>
      <HideButton onClick={handleHideButtonClick} id={id}>
        {event.isHidden ? (
          <img src={eyeIcon} alt="show" />
        ) : (
          <img src={hideEyeIcon} alt="hide" />
        )}
      </HideButton>
    </>
  )

  function toggleEventDetail() {
    setIsEventDetailVisible(!isEventDetailVisible)
  }

  function handleHideButtonClick() {
    onHideButtonClick(event.id)
  }
}

const Event = styled.li`
  grid-column: 1;
  list-style: none;
  margin: 0;
  margin-bottom: 20px;
  padding: 4px;
  text-align: center;
`
const EventHeader = styled.div`
  margin: 0;
  border-radius: 6px;
  border: solid 3px ${(props) => getColorByName(props.name)};
  border-left: solid 10px ${(props) => getColorByName(props.name)};
`
const HideButton = styled.button`
  grid-column: 2;
  align-self: start;
  justify-self: start;
  margin: 0;
  padding: 5px 0;
  margin-top: 23.325px;
  background: none;
`
