import React, { useState } from 'react'
import addPacklistIcon from '../../img/addPacklistIcon.svg'
import addEvent1Icon from '../../img/addEvent1Icon.svg'
import Header from '../components/Header'
import EventForm from '../EventForm/EventForm'
import useEventForm from '../EventForm/useEventForm'
import usePacklists from '../Packlist/usePacklists'
import PacklistForm from '../PacklistForm/PacklistForm'
import usePacklistForm from '../PacklistForm/usePacklistForm'
import Footer from '../components/Footer'
import EventList from './EventList'
import useEvents from './useEvents'
import { useHistory } from 'react-router-dom'

export default function EventPage() {
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [eventFilter, setEventFilter] = useState('date')
  const [eventToEdit, setEventToEdit] = useState()
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
    onEventSaveEdit,
  } = useEventForm(addEvent, updateEvent)
  const { packlists, addPacklist } = usePacklists()
  const {
    packlistFormIsVisible,
    showPacklistForm,
    onPacklistSave,
  } = usePacklistForm(addPacklist)
  const hasHiddenEvent = eventArray.some((event) => event.isHidden === true)
  const hasOldEvent = eventArray.some(
    (event) => event.eventEndDate < new Date().toJSON().slice(0, 10)
  )

  const history = useHistory()
  function handleCreateEventClick() {
    history.push('/createevent/')
  }
  return (
    <>
      {eventFormIsVisible ? (
        <>
          <header>
            <h1>Create Event</h1>
          </header>
          <main>
            <EventForm
              onEventSave={onEventSave}
              packlists={packlists}
              eventToEdit={eventToEdit}
              onEventSaveEdit={onEventSaveEdit}
            />
          </main>
          <Footer />
        </>
      ) : packlistFormIsVisible ? (
        <>
          <header>
            <h1>Create PackList</h1>
          </header>
          <main>
            <PacklistForm onPacklistSave={onPacklistSave} />
          </main>
          <Footer />
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
              onEditButtonClick={editEvent}
              onDeleteButtonClick={delEvent}
              onTicketCheckboxClick={handleTicketCheckbox}
            />
          </main>
          <footer>
            <button onClick={handleCreateEventClick}>
              {' '}
              <img src={addEvent1Icon} alt="create event" />
            </button>
            <button onClick={showPacklistForm}>
              {' '}
              <img src={addPacklistIcon} alt="create packlist" />
            </button>
          </footer>
        </>
      )}
    </>
  )

  function toggleHide(id) {
    const index = eventArray.findIndex((event) => event.id === id)
    const eventUpdate = eventArray[index]
    if (!eventUpdate.isHidden)
      window.confirm(
        'Are you sure you want hide this event? You can find hidden events at the left dropdown in the hidden list.'
      )
    eventUpdate.isHidden = !eventUpdate.isHidden
    updateEvent(eventUpdate)
  }

  function editEvent(id) {
    const index = eventArray.findIndex((event) => event.id === id)
    const eventToEdit = eventArray[index]
    setEventToEdit(eventToEdit)
    showEventForm()
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
