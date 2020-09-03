import React from 'react'
import EventItem from './EventItem'
import styled from 'styled-components/macro'
import EventForm from './EventForm'
import useEventForm from './useEventForm'

export default function EventList({ eventArray, categoryFilter, addEvent }) {
    eventArray.sort((event1, event2) => event1.eventStartDate > event2.eventStartDate)
    const filteredEvents = eventArray.filter(event => categoryFilter === 'all' || event.category === categoryFilter)
    const currentYearString = new Date().getFullYear().toString()
    const availableYears = filteredEvents.reduce((years, event) => {
        const eventYear = event.eventStartDate.slice(0, 4)
        if (!years.includes(eventYear) && eventYear >= currentYearString) years.push(eventYear)
        return years
    }, [currentYearString])

    const { formIsVisible, onSave, onCancel } = useEventForm(addEvent)

    return (
        <>

            {formIsVisible ? (
                <EventForm onCancel={onCancel} onSave={onSave} />
            ) : (
                    <>
                        {availableYears.map(year => (
                            <EventContainer key={year}>
                                <EventYearHeadline>Events {year}</EventYearHeadline>
                                {filteredEvents.map(event => event.eventStartDate.slice(0, 4) === year &&
                                    <EventItem event={event} key={event.id}></EventItem>
                                )}
                            </EventContainer>
                        ))}
                    </>
                )}
        </>
    )
}

const EventContainer = styled.ul`
margin: 10px;
padding:0;
`
const EventYearHeadline = styled.h1`
margin-bottom: 5px;
padding:0;
text-align: left;
`
