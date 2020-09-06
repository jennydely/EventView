import React, { useState } from 'react';
import useEventForm from './componentsEventPage/useEventForm'
import usePacklists from './usePacklists';

export default function PackListPage(packlistFilter) {
    const {packlists} = usePacklists
    const { goBack } = useEventForm()  // Button muss noch umgeschrieben werden
    //packlists.sort((event1, event2) => event1.eventStartDate > event2.eventStartDate)// alphabetisch sortieren
    const filteredPacklists = packlists.filter(packlist => packlistFilter === '' || packlist.includes(packlistFilter) )
    return (
        <>
        <main>
            <ul>
                {filteredPacklists.map(item =>(
                    <li>{item}</li>
                    ))}

                </ul>
        </main>
        <footer>
            <button type="button" onClick={goBack}>Back</button>
        </footer>
        </>
    )
}