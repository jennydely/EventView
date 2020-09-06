import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import useEventForm from './componentsEventPage/useEventForm'
import usePacklists from './usePacklists';

export default function PackListPage(packlistCategory) {
    const {packlists} = usePacklists
    const [packlistFilter, setPacklistFilter] = useState('') 
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
        <NavLink to="/">
            <button type="button" onClick={goBack}>Back</button>
        </NavLink>
        </footer>
        </>
    )
}