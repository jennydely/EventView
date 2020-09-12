import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import useHeight from './useHeight'
import styled from 'styled-components/macro'
import { formatDate } from '../services/date'
import EventDetails from './EventDetails'
import IconEye from '../img/IconEye.svg'
import IconHideEye from '../img/IconHideEye.svg'

export default function EventItem({ event, id, onHideButtonClick }) {
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
        <EventDetails event={event} style={detailStyle} bind={bind} />
      </Event>
      <HideButton onClick={handleHideButtonClick} id={id}>
        {event.isHide ? (
          <img src={IconEye} alt="show" />
        ) : (
          <img src={IconHideEye} alt="hide" />
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
  border: solid 3px
    ${({ name }) =>
      name === 'holiday'
        ? 'var(--blue-70)'
        : name === 'metal'
        ? 'var(--darkgrey-75)'
        : name === 'medieval'
        ? 'var(--darkbrown-70)'
        : name === 'other'
        ? 'var(--lightbrown-70)'
        : 'var(--lightgrey-main)'};
  border-left: solid 10px
    ${({ name }) =>
      name === 'holiday'
        ? 'var(--blue-70)'
        : name === 'metal'
        ? 'var(--darkgrey-75)'
        : name === 'medieval'
        ? 'var(--darkbrown-70)'
        : name === 'other'
        ? 'var(--lightbrown-70)'
        : 'var(--lightgrey-main)'};
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
