import React, { useState } from 'react';
import Header from './componentsEventPage/Header'
import EventList from './componentsEventPage/EventList'
//import jsonEvents from './mockDB/events.json'
import useEventForm from './componentsEventPage/useEventForm'
import useEvents from './componentsEventPage/useEvents'

export default function EventPage() {
    const [categoryFilter, setCategoryFilter] = useState('all')
    //const eventArray = jsonEvents.slice()
    const { eventArray, addEvent} = useEvents()
    const { showForm } = useEventForm(addEvent)

    return (
        <>
            <Header onSelectFilter={setCategoryFilter} />
            <main>
                <EventList eventArray={eventArray} categoryFilter={categoryFilter} />
            </main>
            <footer>
             <button onClick={showForm}>Create Event</button>
            </footer>
        </>
    )
}
