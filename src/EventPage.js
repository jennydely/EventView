import React, { useState } from 'react'
import Header from './components/Header'
import EventList from './components/EventList'
import EventForm from './components/EventForm'
import useEventForm from './components/useEventForm'
import useEvents from './components/useEvents'
//import Packlist from './Packlist/PacklistFormNoHook'
import PacklistForm from './Packlist/PacklistForm'
import usePacklistForm from './Packlist/usePacklistForm'
import usePacklists from './Packlist/usePacklists'

export default function EventPage() {
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [eventFilter, setEventFilter] = useState('date')
  const { eventArray, addEvent } = useEvents()
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
          />
          <main>
            <EventList
              eventArray={eventArray}
              eventFilter={eventFilter}
              categoryFilter={categoryFilter}
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
}
