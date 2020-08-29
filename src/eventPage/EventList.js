import React from 'react';
import Event from './Event'
//import {getEvents} from '../utils/services'

const jsonEvents = require('../mockDB/events.json')

export default function EventList() {

    return (
        <ul>
            {jsonEvents.map(event =>
                <Event event={event} key={event.id}></Event>
            )}
        </ul>
    )
}