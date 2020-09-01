import React from 'react';
import styled from 'styled-components/macro'
import {formatDate} from '../utils/date'


export default function EventDetails({event}) {
const{name, street, zip, location, price, website} = event

    return (
        <section>
            <img></img>
            <p>"Adress: + {name}<br>{street}<br>{zip} + ' ' + {location}"</p>
            <p>"Price: {price} + ' €'"</p>
        </section>
    )
}