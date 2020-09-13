import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import Checkbox from '../common/Checkbox'
import Paragraph from '../common/Paragraph'
import getColorByName from '../services/getColorByName'
import trashIcon from '../img/trash.svg'

export default function EventDetails({
  event,
  style,
  bind,
  onDeleteButtonClick,
}) {
  const {
    poster,
    name,
    street,
    zip,
    location,
    price,
    website,
    packlistCategory,
  } = event
  const defaultImg =
    'https://delyed.de/wp-content/uploads/2018/01/5d737e918441914a9d2743268ef65439.jpg'
  const history = useHistory()
  function handleBackButtonClick() {
    history.push('/packlist/' + packlistCategory)
  }

  return (
    <Details name={event.category} style={style} {...bind}>
      <LinkPoster href={poster ? poster : website} target="blank">
        {' '}
        <EventPoster
          src={poster ? poster : defaultImg}
          alt={name + ' Poster'}
        />
      </LinkPoster>
      <Address>Address: </Address>
      <Price>Price: </Price>
      <Name>{name}</Name>
      <ParagraphColumn3 row={2}>{street}</ParagraphColumn3>
      <ParagraphColumn3 row={3}>
        {zip} {location}
      </ParagraphColumn3>
      <ParagraphColumn3 row={5}>
        {price ? price + ' €' : 'kostenlos'}{' '}
      </ParagraphColumn3>
      <TicketLabel id="Ticket" price={price}>
        Ticket
      </TicketLabel>
      <Ticket type="checkbox" htmlFor="Ticket" price={price} />
      <ButtonContainer>
        <button onClick={handleBackButtonClick}>PackList</button>
        <ExternalLink href={website} target="blank" title="link">
          Website
        </ExternalLink>
        <ExternalLink
          href="https://www.google.de/maps"
          target="blank"
          title="link"
        >
          Route
        </ExternalLink>
      </ButtonContainer>
      <DeleteButton onClick={handleDeleteButtonClick}>
        <img src={trashIcon} alt="delete" />
      </DeleteButton>
    </Details>
  )
  function handleDeleteButtonClick() {
    onDeleteButtonClick(event.id)
  }
}

const Details = styled(animated.section)`
  display: grid;
  grid-template-columns: 20% repeat(4, auto);
  grid-template-rows: repeat(8, auto);
  margin: 0;
  margin-top: -2px;
  border: 2px solid ${(opt) => getColorByName(opt.name)};
  border-top: 0;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    height: 0;
  }

  &::after {
    height: 8px;
    bottom: 0;
  }
`
const ParagraphColumn3 = styled(Paragraph)`
  grid-column: 3/6;
  grid-row: ${(props) => props.row};
  text-align: left;
`
const LinkPoster = styled.a`
  grid-column: 1;
  grid-row: 1 / span 5;
`
const EventPoster = styled.img`
  grid-column: 1 / span 1;
  grid-row: 1 / span 5;
  margin: 7px;
  object-fit: cover;
  width: 90%;
  max-height: 90%;
`
const Address = styled(Paragraph)`
  grid-column: 2;
  grid-row: 1 / span 4;
  margin-top: 7px;
  font-weight: 400;
  font-size: 112.5%;
`
const Price = styled(Paragraph)`
  grid-column: 2;
  grid-row: 5;
  font-weight: 400;
  font-size: 112.5%;
`
const TicketLabel = styled.label`
  grid-column: 2;
  grid-row: 6;
  text-align: right;
  align-self: center;
  margin: 2px;
  font-weight: bold;
  font-size: 112.5%;
  display: ${({ price }) => (price ? '' : 'none')};
`
const Name = styled(Paragraph)`
  grid-column: 3/6;
  grid-row: 1;
  text-align: left;
  margin-top: 7px;
`
const Ticket = styled(Checkbox)`
  grid-column: 3;
  grid-row: 6;
  display: ${({ price }) => (price ? '' : 'none')};
`
const ButtonContainer = styled.div`
  grid-column: 1/6;
  grid-row: 7;
  display: flex;
  width: 100%;
  margin: 1px;
  padding: 0;
  justify-content: space-around;
`
const ExternalLink = styled.a`
  display: inline-block;
  min-width: fit-content;
  min-height: fit-content;
  margin: 2px;
  padding: 4px 6px;
  border: none;
  border-radius: 6px;
  background-color: var(--darkgrey-75);
  font-size: 130%;
  text-align: center;
  color: var(--sandyellow-main);
`
const DeleteButton = styled.button`
  grid-column: 5;
  grid-row: 8;
  color: var(--red-main);
  font-size: 130%;
  float: right;
  text-decoration: none;
  border-radius: 20px;
  background: none;
  margin: 4px;
  margin-top: 7px;
`
