import React, { useEffect, useState } from 'react'
import { useSpring } from 'react-spring'
import useHeight from './useHeight'
import styled from 'styled-components/macro'
import { formatDate } from '../utils/date'
import EventDetails from './EventDetails'

export default function EventItem({ event }) {
    const { name, location, eventStartDate, eventEndDate } = event
    const { height, bind } = useHeight([event])
    const [isEventDetailVisible, setIsEventDetailVisible] = useState(false)
    const detailStyle = {
        ...useSpring({
            height: isEventDetailVisible ? height : 0,
        }),
    }

    return (
        <Event>
            <EventHeader onClick={toggleEventDetail}>
                <Title>{name} - {location}</Title>
                <Duration>{formatDate(eventStartDate, eventEndDate)}</Duration>
            </EventHeader>
            <EventDetails
                event={event}
                style={detailStyle}
                bind={bind} />
        </Event>
    )

    function toggleEventDetail() {
        console.log('hallo', isEventDetailVisible, height, detailStyle)
        setIsEventDetailVisible(!isEventDetailVisible)
    }
}

const Event = styled.li`
list-style:none;
marign: 0;
margin-bottom:20px;
padding:4px;
text-align:center;
`
const EventHeader = styled.div`
margin: 0;
border: 2px solid #964B00;
`

const Title = styled.h2`
margin: 0;
font-size: 114%;
`
const Duration = styled.p`
margin:0;
font-size: 112%;
`