import React from 'react';
import styled from 'styled-components/macro'

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
border: 2px solid brown;
margin:20px 0;
padding:4px;
text-align:center;
`
const Title = styled.h2`
margin: 0;
font-size: 100%;
`
const Date = styled.p`
margin:0;
`