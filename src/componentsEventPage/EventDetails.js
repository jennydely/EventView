import React from 'react';
import { animated } from 'react-spring'
import styled from 'styled-components/macro'


export default function EventDetails({ event, style, bind }) {
  const { name, street, zip, location, price, website } = event

  return (
    <Details style={style} {...bind}>
      <EventPoster src="https://www.rockharz-festival.com/wp-content/uploads/2020/07/rhz2020_poster_a1_juni2020_v9a_ansicht_l.jpg" alt="Rockharz Festival Flyer" />
      <Address>Address: </Address>
      <Price>Price: </Price>
      <Name>{name}</Name>
      <Street>{street}</Street>
      <Location>{zip} {location}</Location>
      <PriceValue>€</PriceValue>
      <ButtonContainer>
        <button>PackList</button>
        <button>Website</button>
        <button>Googlemaps</button>
      </ButtonContainer>
    </Details>
  )
}

const Details = styled(animated.section)`
display:grid;
grid-template-columns: 20% repeat(4,auto);
grid-template-rows: repeat(5,auto) 30px 30px;
margin:0;
margin-top: -2px;
border:2px solid #964B00;
border-top: 0;
overflow: hidden;

&::before,
&::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
}

&::before {
  height: 0;
  }

&::after {
  height: 8px;
  bottom: 0;
}
`
const EventPoster = styled.img`
grid-column: 1;
grid-row: 1 / span 5;
margin:7px;
object-fit: cover;
  width: 90%;
  max-height: 90%;
`

const Address = styled.p`
grid-column: 2;
grid-row: 1;
text-align:right;
margin:7px;
font-weight:bold;
font-size: 100%;
`
const Price = styled.p`
grid-column: 2;
grid-row: 5;
text-align:right;
margin:7px;
font-weight:bold;
font-size: 100%;
`
const Name = styled.p`
grid-column: 3/5;
grid-row: 1;
text-align:left;
margin:7px;
font-size: 100%;
`
const Street = styled.p`
grid-column: 3/5;
grid-row: 2;
text-align:left;
margin:7px;
font-size: 100%;
`
const Location = styled.p`
grid-column: 3/5;
grid-row: 3;
text-align:left;
margin:7px;
font-size: 100%;
`
const PriceValue = styled.p`
grid-column: 3/5;
grid-row: 5;
text-align:left;
margin:7px;
font-size: 100%;
`

const ButtonContainer = styled.div`
grid-column: 1/6;
grid-row: 6;
display:flex;
with: 100%;
justify-content:space-around;

`
