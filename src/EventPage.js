import React, { useState } from 'react';
import Header from './componentsEventPage/Header'
import EventList from './componentsEventPage/EventList'
import EventForm from './componentsEventPage/EventForm'
import useEventForm from './componentsEventPage/useEventForm'
import useEvents from './componentsEventPage/useEvents'
import Main92vh from './common/Main92vh'


export default function EventPage() {
    const [categoryFilter, setCategoryFilter] = useState('all')
    const { eventArray, addEvent } = useEvents()
    const { formIsVisible, showForm, onSave, goBack } = useEventForm(addEvent)

    return (
        <>
           

            {formIsVisible ?
                (<>
                    <Main92vh><EventForm onSave={onSave} />
                    </Main92vh>

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
