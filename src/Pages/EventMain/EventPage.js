import React, { useState } from 'react'
import addPacklistIcon from '../../img/addPacklistIcon.svg'
import addEvent1Icon from '../../img/addEvent1Icon.svg'
import Header from '../components/Header'
import EventList from './EventList'
import useEvents from './useEvents'
import { useHistory } from 'react-router-dom'

export default function EventPage() {
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [eventFilter, setEventFilter] = useState('date')
  const [searchedEvent, setSearchedEvent] = useState('')
  const [searchedEvents, setSearchedEvents] = useState('')
  const {
    eventArray,
    updateEvent,
    removeEvent,
    updateTicketCheckbox,
  } = useEvents()

  const history = useHistory()
  function handleCreateEventClick() {
    history.push('/eventform')
  }

  function handleCreatePacklistClick() {
    history.push('/packlistform')
  }

  return (
    <>
      <Header
        onSelectFilter={handleCategoryFilter}
        onSelectEventFilter={setEventFilter}
        eventArray={eventArray}
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
        />
      </main>
      <footer>
        <button onClick={handleCreateEventClick}>
          {' '}
          <img src={addEvent1Icon} alt="create event" />
        </button>
        <button onClick={handleCreatePacklistClick}>
          {' '}
          <img src={addPacklistIcon} alt="create packlist" />
        </button>
      </footer>
    </>
  )

  function handleCategoryFilter(categoryFilter) {
    setSearchedEvent('')
    setSearchedEvents('')
    setCategoryFilter(categoryFilter)
  }

  function setEventSuggestion(searchedEvent) {
    setCategoryFilter('category')
    setSearchedEvents('')
    setSearchedEvent(searchedEvent)
  }

  function setEventSearch(searchedName) {
    setCategoryFilter('category')
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
