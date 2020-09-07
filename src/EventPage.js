import React, { useState } from 'react';
import Header from './componentsEventPage/Header'
import EventForm from './componentsEventPage/EventForm'
import useEventForm from './componentsEventPage/useEventForm'
import EventList from './componentsEventPage/EventList'
import useEvents from './componentsEventPage/useEvents'

export default function EventPage() {
    const [categoryFilter, setCategoryFilter] = useState('all')
    const { eventArray, addEvent } = useEvents()
    const { formIsVisible, showForm, onSave, goBack } = useEventForm(addEvent)

    return (
        <>
            {formIsVisible ?
                (<>
                  
                    <main><EventForm onSave={onSave} />
                    </main>

                    <footer>
                        <button type="button" onClick={goBack}>Back</button>
                    </footer>
                </>

                ) : (
                    <>
                      <Header onSelectFilter={setCategoryFilter} /> 
                        <main><EventList eventArray={eventArray} categoryFilter={categoryFilter} />
                        </main>
                        <footer>
                            <button onClick={showForm}>Create Event</button>
                        </footer>
                    </>
                )}
        </>
    )
}
