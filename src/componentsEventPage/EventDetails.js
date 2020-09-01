import React from 'react';
import styled from 'styled-components/macro'


export default function EventDetails({ event }) {
    const { name, street, zip, location, price, website } = event

    return (
        <section>
            <img src="https://www.rockharz-festival.com/wp-content/uploads/2020/07/rhz2020_poster_a1_juni2020_v9a_ansicht_l.jpg" alt="Rockharz Festival Flyer" width="222" height="auto" />
            <p>Adress: {name} <br />
                {street} <br />
                {zip} {location}<br /></p>
            <p> Price: {price} €</p>
            <button>PackList</button>
            <button>Website</button>
            <button>Googlemaps</button>
        </section>
    )
}