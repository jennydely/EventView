import React, { useState, useContext } from 'react'
import { useSpring } from 'react-spring'
import styled from 'styled-components/macro'
import packlistIcon from '../../../img/packlistIcon.svg'
import editIcon from '../../../img/editIcon.svg'
import starIcon from '../../../img/starIcon.svg'
import starredIcon from '../../../img/starredIcon.svg'
import copyIcon from '../../../img/copyIcon.svg'
import getColorOfEventCategory from '../../../services/getColorOfEventCategory'
import { formatDate } from '../../../services/date'
import EventDetails from './EventDetails'
import useHeight from './useHeight'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../../providers/UserProvider";
import { putEvent } from '../services/putEvent'
import { useDispatch } from 'react-redux'

export default function EventItem({
  event,
  id,
  filteredEventList,
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
  const [isStarred, setIsStarred] = useState(event.isStarred)
  const detailStyle = {
    ...useSpring({
      height: isEventDetailVisible ? height : 0,
    }),
  }
  const history = useHistory()
  const user = useContext(UserContext);
  const dispatch = useDispatch()

  function handleEditEvent(eventId) {
    history.push('/eventform/edit/' + eventId)
  }

  function handleCopyEvent(eventId) {
    history.push('/eventform/copy/' + eventId)
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

          {user && filteredEventList.find((filteredEvent) => filteredEvent.visibility === 'private') ?
            < ButtonContainer >
              <PacklistButton onClick={showPacklist}>
                <img src={packlistIcon} alt="packlist" />
              </PacklistButton>
              <EditButton onClick={handleEditButtonClick}>
                <img src={editIcon} alt="edit" />
              </EditButton>
            </ButtonContainer>
            :
            user && filteredEventList.find((filteredEvent) => filteredEvent.visibility === 'public') ?
              < ButtonContainer >
                <PacklistButton onClick={toggleStar}>
                  {event.isStarred ? <img src={starredIcon} alt="starred" /> : <img src={starIcon} alt="star" />}
                </PacklistButton>
                <EditButton onClick={handleCopyButtonClick}>
                  <img src={copyIcon} alt="copy" />
                </EditButton>
              </ButtonContainer>
              :
              user && filteredEventList.find((filteredEvent) => filteredEvent.isStarred === true) &&
              < ButtonContainer >
                <PacklistButton onClick={toggleStar}>
                  {event.isStarred ? <img src={starredIcon} alt="starred" /> : <img src={starIcon} alt="star" />}
                </PacklistButton>
                <EditButton onClick={handleEditButtonClick}>
                  <img src={editIcon} alt="edit" />
                </EditButton>
              </ButtonContainer>
          }

        </EventHeader>
        {user ?
          <EventDetails
            event={event}
            style={detailStyle}
            bind={bind}
            id={id}
            onTicketCheckboxClick={onTicketCheckboxClick}
          />
          :
          <EventDetails
            event={event}
            style={detailStyle}
            bind={bind}
            id={id}
          />}
      </Event>
    </>
  )

  function toggleEventDetail() {
    setIsEventDetailVisible(!isEventDetailVisible)
  }

  function toggleStar(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    setIsStarred(!isStarred)
    event.isStarred = !isStarred
    dispatch({
      type: "UPDATE_EVENT", payload: {
        ...event
      }
    })
  }

  function handleEditButtonClick() {
    handleEditEvent(event.id)
  }

  function handleCopyButtonClick() {
    handleCopyEvent(event.id)
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
