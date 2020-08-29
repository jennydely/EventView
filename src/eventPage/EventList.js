import React from 'react';
import Event from './Event'
import styled from 'styled-components/macro'
//import {getEvents} from '../utils/services'
const jsonEvents = require('../mockDB/events.json')

export default function EventList() {

    return (
        <EventContainer>
            {jsonEvents.map(event =>
                <Event event={event} key={event.id}></Event>
            )}
        </EventContainer>
    )
}

const EventContainer = styled.ul`
margin: 0;
padding:0;
`
