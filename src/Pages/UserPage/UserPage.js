import React, { useState, useContext } from 'react'
import styled from 'styled-components/macro'
import { connect, useSelector } from "react-redux"
import addPacklistIcon from '../../img/addPacklistIcon.svg'
import addEvent1Icon from '../../img/addEvent1Icon.svg'
import settingsIcon from '../../img/settingsIcon.svg'
import Header from '../components/Header'
import EventList from '../EventList/EventList'
import useEvents from '../EventList/useEvents'
import { useHistory } from 'react-router-dom'
import fetchPublicEvents from '../../redux/fetchPublicEvents'
import fetchPrivateEvents from '../../redux/fetchPrivateEvents'
import { UserContext } from "../../providers/UserProvider";
import { useEffect } from 'react'
import { bindActionCreators } from 'redux'

function UserPage({ fetchPrivateEvents, fetchPublicEvents, events }) {
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [eventFilter, setEventFilter] = useState('Date')
  const [searchedEvent, setSearchedEvent] = useState('')
  const [searchedEvents, setSearchedEvents] = useState('')
  const [chosenEventListFilter, setChosenEventListFilter] = useState('Public')
  const { updateTicketCheckbox, } = useEvents()

  const eventArray = events//useSelector(state => state.events)
  const user = useContext(UserContext);
  const history = useHistory()


  function handleCreateEventClick() {
    history.push('/eventform')
  }

  function handleCreatePacklistClick() {
    history.push('/packlistform')
  }

  function handleSettingsClick() {
    history.push('/settings')
  }

  useEffect(() => {
    fetchPublicEvents()
    if (user) {

      fetchPrivateEvents({ userToken: user.token })
    }
  }, [fetchPublicEvents, fetchPrivateEvents, user])

  return (
    <>
      <Header
        onSelectFilter={handleCategoryFilter}
        onSelectEventFilter={setEventFilter}
        onSelectEventListFilter={setChosenEventListFilter}
        eventArray={eventArray}
        eventFilter={eventFilter}
        chosenEventListFilter={chosenEventListFilter}
        categoryFilter={categoryFilter}
        handleEventSuggestion={setEventSuggestion}
        handleEventSearch={setEventSearch}
      />

      <main>
        <EventList
          eventArray={eventArray}
          eventFilter={eventFilter}
          categoryFilter={categoryFilter}
          eventSearch={searchedEvent}
          multipleEventSearch={searchedEvents}
          chosenEventListFilter={chosenEventListFilter}
          onTicketCheckboxClick={handleTicketCheckbox}
          handleReloadButtonClick={handleReloadButtonClick}
        />
      </main>
      <footer>

        <FooterButton onClick={handleCreateEventClick}>
          <img src={addEvent1Icon} alt="create event" />
        </FooterButton>
        <FooterButton onClick={handleCreatePacklistClick}>
          <img src={addPacklistIcon} alt="create packlist" />
        </FooterButton>
        <FooterButton onClick={handleSettingsClick}>
          <SettingsSVG src={settingsIcon} alt="settings" />
        </FooterButton>

      </footer>
    </>
  )

  function handleCategoryFilter(categoryFilter) {
    setSearchedEvent('')
    setSearchedEvents('')
    setCategoryFilter(categoryFilter)
  }

  function handleReloadButtonClick() {
    setCategoryFilter('Category')
    setEventFilter('Sort by')
    setChosenEventListFilter('Public')
    setSearchedEvent('')
    setSearchedEvents('')
  }

  function setEventSuggestion(searchedEvent) {
    setCategoryFilter('Category')
    setEventFilter('Sort by')
    setSearchedEvents('')
    setSearchedEvent(searchedEvent)
  }

  function setEventSearch(searchedName) {
    setCategoryFilter('Category')
    setEventFilter('Sort by')
    setSearchedEvent('')
    setSearchedEvents(searchedName)
  }

  function handleTicketCheckbox(id) {
    const index = eventArray.findIndex((event) => event.id === id)
    const clickedTicket = eventArray[index]
    clickedTicket.ticketBought = !clickedTicket.ticketBought
    updateTicketCheckbox(clickedTicket)
  }

}

const mapStateToProps = state => {
  const { error, pending, publicEvents, privateEvents } = state.events || {};
  // merge public and private events here
  const mergedEvents = [...publicEvents, ...privateEvents]
  const events = mergedEvents.reduce((acc, event) => {
    if (!acc.find(findEvent => findEvent.id === event.id)) {
      acc.push(event)
    }
    return acc
  }, [])
  return { error, pending, publicEvents, privateEvents, events };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPublicEvents: fetchPublicEvents,
  fetchPrivateEvents: fetchPrivateEvents
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)

const FooterButton = styled.button`
  padding: 0px;
  margin: 4px 0;
`
const SettingsSVG = styled.img`
  padding-bottom: 8px;`
