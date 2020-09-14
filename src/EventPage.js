import React, { useState } from 'react'
import Header from './components/Header'
import EventList from './components/EventList'
import EventForm from './components/EventForm'
import useEventForm from './components/useEventForm'
import useEvents from './components/useEvents'
import PacklistForm from './Packlist/PacklistForm'
import usePacklistForm from './Packlist/usePacklistForm'
import usePacklists from './Packlist/usePacklists'
import { getYearsOfEvents } from './services/getYearsOfEvents'

export default function EventPage() {
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [eventFilter, setEventFilter] = useState('date')
  const {
    eventArray,
    addEvent,
    updateEvent,
    removeEvent,
    updateTicketCheckbox,
  } = useEvents()
  const {
    eventFormIsVisible,
    showEventForm,
    onEventSave,
    goEventBack,
  } = useEventForm(addEvent)
  const { packlists, addPacklist } = usePacklists()
  const {
    packlistFormIsVisible,
    showPacklistForm,
    onPacklistSave,
    goPacklistBack,
  } = usePacklistForm(addPacklist)
  const hasHiddenEvent = eventArray.some((event) => event.isHidden === true)
  const hasOldEvent = eventArray.some(
    (event) =>
      event.eventStartDate.slice(0, 4) < getYearsOfEvents(eventArray)[0]
  )

  return (
    <>
      {eventFormIsVisible ? (
        <>
          <header>
            <h1>Create Event</h1>
          </header>
          <main>
            <EventForm onEventSave={onEventSave} packlists={packlists} />
          </main>
          <footer>
            <button type="button" onClick={goEventBack}>
              Back
            </button>
          </footer>
        </>
      ) : packlistFormIsVisible ? (
        <>
          <header>
            <h1>Create PackList</h1>
          </header>
          <main>
            <PacklistForm onPacklistSave={onPacklistSave} />
          </main>
          <footer>
            <button type="button" onClick={goPacklistBack}>
              Back
            </button>
          </footer>
        </>
      ) : (
        <>
          <Header
            onSelectFilter={setCategoryFilter}
            onSelectEventFilter={setEventFilter}
            eventArray={eventArray}
            hasHiddenEvent={hasHiddenEvent}
            hasOldEvent={hasOldEvent}
          />
          <main>
            <EventList
              eventArray={eventArray}
              eventFilter={eventFilter}
              categoryFilter={categoryFilter}
              onHideButtonClick={toggleHide}
              onDeleteButtonClick={delEvent}
              onTicketCheckboxClick={handleTicketCheckbox}
            />
          </main>
          <footer>
            <button onClick={showEventForm}>Create Event</button>
            <button onClick={showPacklistForm}>Create PackList</button>
          </footer>
        </>
      )}
    </>
  )

  function toggleHide(id) {
    const index = eventArray.findIndex((event) => event.id === id)
    const eventUpdate = eventArray[index]
    eventUpdate.isHidden = !eventUpdate.isHidden
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
