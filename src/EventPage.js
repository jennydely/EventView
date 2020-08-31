import React, { useState } from 'react';
import EventList from './componentsEventPage/EventList'
import Header from './componentsEventPage/Header'
import jsonEvents from './mockDB/events.json'

export default function EventPage() {
    const [categoryFilter, setCategoryFilter] = useState('all')
    const eventArray = jsonEvents.slice()

    return (
        <>
            <Header onSelectFilter={setCategoryFilter} />
                <EventList eventArray={eventArray} categoryFilter={categoryFilter}/>
        </>

    )

}
