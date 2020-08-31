import React from 'react'
import Event from './Event'
import styled from 'styled-components/macro'
//import {getEvents} from '../utils/services'

export default function EventList({eventArray, categoryFilter}) {
   
    eventArray.sort((event1, event2) => event1.eventDate > event2.eventDate)
    const currentYearString = new Date().getFullYear().toString()
    const availableYears = eventArray.reduce((years, event) => {
        const eventYear = event.eventDate.slice(0, 4)
        if (!years.includes(eventYear) && eventYear >= currentYearString) years.push(eventYear)
        return years
    }, [currentYearString])

    return (
        <>
            {availableYears.map(year => (
                <EventContainer key={year}>
                    <EventYearHeadline>Event {year}</EventYearHeadline>
                    {eventArray.filter(event => categoryFilter === 'all' || event.category === categoryFilter).map(event => event.eventDate.slice(0, 4) === year &&
                        <Event event={event} key={event.id}></Event>
                    )}
                </EventContainer>
            ))}
        </>
    )
}

const EventContainer = styled.ul`
margin: 10px;
padding:0;
`
const EventYearHeadline= styled.h2`
margin: 0;
margin-bottom: 5px;
padding:0;
text-align: left;
`
