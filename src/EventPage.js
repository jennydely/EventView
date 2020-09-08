import React, { useState } from 'react';
import Header from './componentsEventPage/Header'
import EventList from './componentsEventPage/EventList'
import EventForm from './componentsEventPage/EventForm'
import useEventForm from './componentsEventPage/useEventForm'
import useEvents from './componentsEventPage/useEvents'
import PacklistForm from './Packlist/PacklistForm'
import usePacklistForm from './Packlist/usePacklistForm'
import usePacklists from './Packlist/usePacklists';
import MainWhenFooter from './common/MainWhenFooter.js'

export default function EventPage() {
    const [categoryFilter, setCategoryFilter] = useState('all')
    const [eventFilter, setEventFilter] = useState('date')
    const { eventArray, addEvent } = useEvents()
    const { eventFormIsVisible, showEventForm, onEventSave, goEventBack } = useEventForm(addEvent)
    const { addPacklist } = usePacklists()
     const { packlistFormIsVisible, showPacklistForm, onPacklistSave, goPacklistBack } = usePacklistForm(addPacklist)
    return (
        <>
            {eventFormIsVisible ?
                (<>
                    <MainWhenFooter ><EventForm onEventSave={onEventSave} />
                    </MainWhenFooter>

                    <footer>
                        <button type="button" onClick={goEventBack}>Back</button>
                    </footer>
                </>

                ) :

                (packlistFormIsVisible ?
                    (<>
                        <MainWhenFooter ><PacklistForm onPacklistSave={onPacklistSave} />
                        </MainWhenFooter>

                        <footer>
                            <button type="button" onClick={goPacklistBack}>Back</button>
                        </footer>
                    </>

                    ) :

                    (
                        <>
                            <Header onSelectFilter={setCategoryFilter} onSelectEventFilter={setEventFilter} eventArray={eventArray} />
                            <main><EventList eventArray={eventArray} eventFilter={eventFilter} categoryFilter={categoryFilter} />
                            </main>
                            <footer>
                                <button onClick={showEventForm}>Create Event</button>
                                <button onClick={showPacklistForm}>Create PackList</button>
                            </footer>
                        </>
                    ))}
        </>
    )
}
