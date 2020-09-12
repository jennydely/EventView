import React, { useState } from 'react'
import Header from './components/Header'
import EventList from './components/EventList'
import EventForm from './components/EventForm'
import useEventForm from './components/useEventForm'
import useEvents from './components/useEvents'
import PacklistForm from './Packlist/PacklistForm'
import usePacklistForm from './Packlist/usePacklistForm'
import usePacklists from './Packlist/usePacklists'

export default function EventPage() {
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [eventFilter, setEventFilter] = useState('date')
  const { eventArray, addEvent, updateEvent } = useEvents()
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
            onHideButtonClick={toggleHide}
            eventArray={eventArray}
          />
          <main>
            <EventList
              eventArray={eventArray}
              eventFilter={eventFilter}
              categoryFilter={categoryFilter}
              onHideButtonClick={toggleHide}
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
    eventUpdate.isHide = !eventUpdate.isHide
    updateEvent(eventUpdate)
  }
}
