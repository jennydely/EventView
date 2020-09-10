import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import useHeight from './useHeight'
import styled from 'styled-components/macro'
import { formatDate } from '../services/date'
import EventDetails from './EventDetails'

export default function EventItem({ event }) {
  const { name, location, category, eventStartDate, eventEndDate } = event
  const { height, bind } = useHeight([event])
  const [isEventDetailVisible, setIsEventDetailVisible] = useState(false)
  const detailStyle = {
    ...useSpring({
      height: isEventDetailVisible ? height : 0,
    }),
  }

  return (
    <Event>
      <EventHeader name={category} onClick={toggleEventDetail}>
        <h2>
          {name} - {location}
        </h2>
        <h3>{formatDate(eventStartDate, eventEndDate)}</h3>
      </EventHeader>
      <EventDetails event={event} style={detailStyle} bind={bind} />
    </Event>
  )

  function toggleEventDetail() {
    setIsEventDetailVisible(!isEventDetailVisible)
  }
}

const Event = styled.li`
  list-style: none;
  margin: 0;
  margin-bottom: 20px;
  padding: 4px;
  text-align: center;
`
const EventHeader = styled.div`
  margin: 0;
  background: ${({ name }) =>
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
