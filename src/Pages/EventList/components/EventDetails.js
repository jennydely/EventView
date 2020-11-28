import React, { useContext } from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components/macro'
import Checkbox from '../../components/common/Checkbox'
import Paragraph from '../../components/common/Paragraph'
import trashIcon from '../../../img/trashIcon.svg'
import eyeIcon from '../../../img/eyeIcon.svg'
import hideEyeIcon from '../../../img/hideEyeIcon.svg'
import routeIcon from '../../../img/routeIcon.svg'
import websiteIcon from '../../../img/websiteIcon.svg'
import gCalendarIcon from '../../../img/gCalendarIcon.svg'
import getColorOfEventCategory from '../../../services/getColorOfEventCategory'
import { UserContext } from "../../../providers/UserProvider";

export default function EventDetails({
  event,
  style,
  bind,
  id,
  onHideButtonClick,
  onDeleteButtonClick,
  onTicketCheckboxClick,
}) {
  const { poster, name, street, zip, location, price, website, eventStartDate, eventEndDate } = event
  const defaultImg =
    'https://delyed.de/wp-content/uploads/2018/01/5d737e918441914a9d2743268ef65439.jpg'
  const user = useContext(UserContext);

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
        {zip} {location.length > 15 ? location.slice(0, 15) + '...' : location}
      </ParagraphColumn3>
      <ParagraphColumn3 row={5}>
        {price ? price + ' €' : 'kostenlos'}{' '}
      </ParagraphColumn3>
      {user ?
        <><TicketLabel id="Ticket" price={price}>
          Ticket
      </TicketLabel>

          <Ticket
            type="checkbox"
            checked={event.ticketBought}
            onChange={handleCheckboxClick}
            htmlFor="Ticket"
            price={price}
          />
        </> : ''}

      <ButtonContainer row={7} space={'space-around'}>
        <a href={website} target="blank" title="link">
          <img src={websiteIcon} alt="website" />
        </a>
        <a
          href={`https://www.google.de/maps/dir//+${encodeURIComponent(
            street
          )},+${encodeURIComponent(zip)},${encodeURIComponent(location)}`}
          target="blank"
          title="link"
        >
          <img src={routeIcon} alt="route" />
        </a>
        <a href={`http://www.google.com/calendar/render?
action=TEMPLATE
&text=${name}
&dates=${eventStartDate.split('-').join('')}/${eventEndDate.split('-').join('')}
&details=${encodeURIComponent(price + ' € ' + website)}
&location=${encodeURIComponent(street + ',' + zip + ',' + location)}
&trp=false
&sprop=
&sprop=name:`}
          target="_blank" rel="nofollow">
          <img src={gCalendarIcon} alt="google calendar" /></a>

        {user ?
          <><HideButton onClick={handleHideButtonClick} id={id}>
            {event.isHidden ? (
              <img src={eyeIcon} alt="show" />
            ) : (
                <img src={hideEyeIcon} alt="hide" />
              )}
          </HideButton>
            <DeleteButton onClick={handleDeleteButtonClick}>
              <img src={trashIcon} alt="delete" />
            </DeleteButton></>
          : ''}
      </ButtonContainer>
    </Details>
  )

  function handleDeleteButtonClick() {
    if (window.confirm('Are you sure you wish to delete this item?'))
      onDeleteButtonClick(event.id)
  }

  function handleCheckboxClick() {
    onTicketCheckboxClick(event.id)
  }
  function handleHideButtonClick() {
    onHideButtonClick(event.id)
  }
}

const Details = styled(animated.section)`
  display: grid;
  grid-template-columns: 30% repeat(2, auto) 30%;
  grid-template-rows: repeat(8, auto);
  margin: 0;
  margin-top: -2px;
  border-radius: 7px;
  background: var(--eventDetails);
  border: 2px solid ${(opt) => getColorOfEventCategory(opt.name)};
  border-top: 0;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    padding: 2px;
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
  grid-column: 3/5;
  grid-row: ${(props) => props.row};
  text-align: left;
`
const LinkPoster = styled.a`
  grid-column: 1;
  grid-row: 1 / span 5;
  padding: 0;
  margin: 11px 4px 0 4px;
`
const EventPoster = styled.img`
  grid-column: 1 / span 1;
  grid-row: 1 / span 5;
  margin: 0;
  padding: 0;
  object-fit: cover;
  width: 90%;
  max-height: 90%;
`
const Address = styled(Paragraph)`
  grid-column: 2;
  grid-row: 1 / span 4;
  margin-top: 7px;
  margin-left: 4px;
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
  grid-column: 3/5;
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
  grid-column: 1/5;
  grid-row: ${(props) => props.row};
  display: flex;
  width: 100%;
  margin: 1px;
  padding: 0;
  padding-top: 7px;
  justify-content: ${(props) => props.space};
`
const HideButton = styled.button`
  display: inline-block;
  margin: 0;
`
const DeleteButton = styled.button`
  display: inline-block;
  margin: 0;
`
