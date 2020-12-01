import React, { useState} from 'react'
import styled from 'styled-components/macro'
import { useSelector} from "react-redux"
import addPacklistIcon from '../../img/addPacklistIcon.svg'
import addEvent1Icon from '../../img/addEvent1Icon.svg'
import settingsIcon from '../../img/settingsIcon.svg'
import Header from '../components/Header'
import EventList from '../EventList/EventList'
import useEvents from '../EventList/useEvents'
import { useHistory } from 'react-router-dom'
//import { UserContext } from "../../providers/UserProvider";

export default function UserPage() {
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [eventFilter, setEventFilter] = useState('Date')
  const [searchedEvent, setSearchedEvent] = useState('')
  const [searchedEvents, setSearchedEvents] = useState('')
  const {
    updateEvent,
    removeEvent,
    updateTicketCheckbox,
  } = useEvents()

  const eventArray = useSelector(state => state)
  //const dispatch = useDispatch()
  //const user = useContext(UserContext);

  const history = useHistory()
  function handleCreateEventClick() {
    history.push('/eventform')
  }

  function handleCreatePacklistClick() {
    history.push('/packlistform')
  }

  function handleSettingsClick() {
    history.push('/settings')
  }

  return (
    <>
      <Header
        onSelectFilter={handleCategoryFilter}
        onSelectEventFilter={setEventFilter}
        eventArray={eventArray}
        eventFilter={eventFilter}
        categoryFilter={categoryFilter}
        handleEventSuggestion={setEventSuggestion}
        handleEventSearch={setEventSearch}
      />

      <main>
        <EventList
          eventArray={eventArray}
          eventFilter={eventFilter}
          categoryFilter={categoryFilter}
          eventSearch={searchedEvent}
          multipleEventSearch={searchedEvents}
          onHideButtonClick={toggleHide}
          onDeleteButtonClick={delEvent}
          onTicketCheckboxClick={handleTicketCheckbox}
          handleReloadButtonClick={handleReloadButtonClick}
        />
      </main>
      <footer>
        <FooterButton onClick={handleCreateEventClick}>
          <img src={addEvent1Icon} alt="create event" />
        </FooterButton>
        <FooterButton onClick={handleCreatePacklistClick}>
          <img src={addPacklistIcon} alt="create packlist" />
        </FooterButton>
        <FooterButton onClick={handleSettingsClick}>
          <SettingsSVG src={settingsIcon} alt="settings" />
        </FooterButton>
      </footer>
    </>
  )

  function handleCategoryFilter(categoryFilter) {
    setSearchedEvent('')
    setSearchedEvents('')
    setCategoryFilter(categoryFilter)
  }

  function handleReloadButtonClick() {
    setCategoryFilter('Category')
    setEventFilter('Sort by')
    setSearchedEvent('')
    setSearchedEvents('')
  }

  function setEventSuggestion(searchedEvent) {
    setCategoryFilter('Category')
    setEventFilter('Sort by')
    setSearchedEvents('')
    setSearchedEvent(searchedEvent)
  }

  function setEventSearch(searchedName) {
    setCategoryFilter('Category')
    setEventFilter('Sort by')
    setSearchedEvent('')
    setSearchedEvents(searchedName)
  }

  function toggleHide(id) {
    const index = eventArray.findIndex((event) => event.id === id)
    const eventUpdate = eventArray[index]
    if (
      (!eventUpdate.isHidden &&
        window.confirm(
          'Are you sure you want hide this event? You can find hidden events at the left dropdown in the hidden list.'
        )) ||
      eventUpdate.isHidden
    ) {
      eventUpdate.isHidden = !eventUpdate.isHidden
    }

    updateEvent(eventUpdate)
  }

  function delEvent(id) {
    const index = eventArray.findIndex((event) => event.id === id)
    const deletedEvent = eventArray[index]
    removeEvent(deletedEvent)
  }

  function handleTicketCheckbox(id) {
    const index = eventArray.findIndex((event) => event.id === id)
    const clickedTicket = eventArray[index]
    clickedTicket.ticketBought = !clickedTicket.ticketBought
    updateTicketCheckbox(clickedTicket)
  }
}

const FooterButton = styled.button`
  padding: 0px;
  margin: 4px 0;
`
const SettingsSVG = styled.img`
  padding-bottom: 8px;
`
