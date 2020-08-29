import React from 'react';
import styled from 'styled-components'

export default function Event({event}) {
const{eventname, eventlocation, eventdate} = event
    return (
        <EventItem>
            <Title>{eventname} - {eventlocation}</Title>
            <Date>{eventdate}</Date>
        </EventItem>

    )
}

const EventItem = styled.li`
list-style:none;
`
const Title = styled.h2`
margin-top: 20px;
margin-bottom: 4px;
`
const Date = styled.p`
margin-top: 0px;
margin-bottom: 4px;
`