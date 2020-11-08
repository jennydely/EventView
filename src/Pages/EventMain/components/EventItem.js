import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import styled from 'styled-components/macro'
import packlistIcon from '../../../img/packlistIcon.svg'
import editIcon from '../../../img/editIcon.svg'
import getColorOfEventCategory from '../../../services/getColorOfEventCategory'
import { formatDate } from '../../../services/date'
import EventDetails from './EventDetails'
import useHeight from './useHeight'
import { useHistory } from 'react-router-dom'

export default function EventItem({
  event,
  id,
  onHideButtonClick,
  onTicketCheckboxClick,
}) {
  const {
    name,
    location,
    category,
    eventStartDate,
    eventEndDate,
    packlistCategory,
  } = event
  const { height, bind } = useHeight([event])
  const [isEventDetailVisible, setIsEventDetailVisible] = useState(false)
  const detailStyle = {
    ...useSpring({
      height: isEventDetailVisible ? height : 0,
    }),
  }
  const history = useHistory()
  function handleEditEvent(eventId) {
    history.push('/eventform/' + eventId)
  }
  function showPacklist() {
    history.push('/packlist/' + packlistCategory)
  }

  return (
    <>
      <Event>
        <EventHeader name={category} onClick={toggleEventDetail}>
          <TextContainer>
            <h2>~ {name} ~</h2>
            <h3>{location}</h3>
            <h3>{formatDate(eventStartDate, eventEndDate)}</h3>
          </TextContainer>
          <ButtonContainer>
            <PacklistButton onClick={showPacklist}>
              <img src={packlistIcon} alt="packlist" />
            </PacklistButton>
            <EditButton onClick={handleEditButtonClick}>
              <img src={editIcon} alt="edit" />
            </EditButton>
          </ButtonContainer>
        </EventHeader>
        <EventDetails
          event={event}
          style={detailStyle}
          bind={bind}
          id={id}
          onHideButtonClick={onHideButtonClick}
            onTicketCheckboxClick={onTicketCheckboxClick}
        />
      </Event>
    </>
  )

  function toggleEventDetail() {
    setIsEventDetailVisible(!isEventDetailVisible)
  }

  function handleEditButtonClick() {
    handleEditEvent(event.id)
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
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 4px 0 4px 4px;
  border-radius: 7px;
  background: var(--eventItem);
  border: solid 3px ${(props) => getColorOfEventCategory(props.name)};
  border-left: solid 10px ${(props) => getColorOfEventCategory(props.name)};
`
const TextContainer = styled.div`
  align-self: center;
  flex-basis: 90%;
  max-width: 365px;
`
const ButtonContainer = styled.div`
  align-items: flex-end;
  flex-basis: 10%;
`
const PacklistButton = styled.button`
  padding: 22px 11px 2px 0;
`
const EditButton = styled.button`
  padding: 2px 11px 22px 0;
`
