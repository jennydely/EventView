import React from 'react';
import styled from 'styled-components/macro'
import {formatDate} from '../utils/date'

export default function Event({event}) {
const{eventname, eventlocation, eventdate} = event

    return (
        <EventItem>
            <Title>{eventname} - {eventlocation}</Title>
            <Duration>{formatDate(eventdate)}</Duration>
        </EventItem>
    )
}



const EventItem = styled.li`
list-style:none;
border: 2px solid #964B00;
marign: 0;
margin-bottom:20px;
padding:4px;
text-align:center;
`
const Title = styled.h2`
margin: 0;
font-size: 100%;
`
const Duration = styled.p`
margin:0;
`