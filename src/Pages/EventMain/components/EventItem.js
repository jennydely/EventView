import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import styled from 'styled-components/macro'
import eyeIcon from '../../../img/eyeIcon.svg'
import hideEyeIcon from '../../../img/hideEyeIcon.svg'
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
  const history = useHistory()
  function handleEditEvent(eventId) {
    history.push('/eventform/' + eventId)
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
            <HideButton onClick={handleHideButtonClick} id={id}>
              {event.isHidden ? (
                <img src={eyeIcon} alt="show" />
              ) : (
                <img src={hideEyeIcon} alt="hide" />
              )}
            </HideButton>
            <EditButton onClick={handleEditButtonClick}>
              <img src={editIcon} alt="edit" />
            </EditButton>
          </ButtonContainer>
        </EventHeader>
        <EventDetails
          event={event}
          style={detailStyle}
          bind={bind}
          onDeleteButtonClick={onDeleteButtonClick}
          onTicketCheckboxClick={onTicketCheckboxClick}
        />
      </Event>
    </>
  )

  function toggleEventDetail() {
    setIsEventDetailVisible(!isEventDetailVisible)
  }

  function handleHideButtonClick() {
    onHideButtonClick(event.id)
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
  border-radius: 6px;
  border: solid 3px ${(props) => getColorOfEventCategory(props.name)};
  border-left: solid 10px ${(props) => getColorOfEventCategory(props.name)};
`
const TextContainer = styled.div`
  align-self: center;
  flex-basis: 98%;
`
const ButtonContainer = styled.div`
  align-items: flex-end;
`
const HideButton = styled.button`
  padding: 22px 0 2px 11px;
`
const EditButton = styled.button`
  padding: 2px 0 22px 11px;
`
