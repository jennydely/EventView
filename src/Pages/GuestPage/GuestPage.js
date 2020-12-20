import React, { useState, useEffect } from 'react'
import { connect, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import styled from 'styled-components/macro'
import settingsIcon from '../../img/settingsIcon.svg'
import signInIcon from '../../img/signInIcon.svg'
import Header from '../components/Header'
import EventList from '../EventList/EventList'
import { useHistory } from 'react-router-dom'
import fetchPublicEvents from '../../redux/fetchPublicEvents'


function GuestPage({ publicEvents, fetchPublicEvents }) {
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [eventFilter, setEventFilter] = useState('Date')
  const [searchedEvent, setSearchedEvent] = useState('')
  const [searchedEvents, setSearchedEvents] = useState('')

  const eventArray = publicEvents || []//useSelector(state => state)
  const history = useHistory()

  function handleSignInClick() {
    history.push('/login')
  }

  function handleSettingsClick() {
    history.push('/settings')
  }

  useEffect(() => {
    fetchPublicEvents()
  }, [fetchPublicEvents])

  return (
    <>
      <Header
        onSelectFilter={handleCategoryFilter}
        onSelectEventFilter={setEventFilter}
        eventArray={eventArray}
        eventFilter={eventFilter}
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
          handleReloadButtonClick={handleReloadButtonClick}
        />
      </main>
      <footer>
        <FooterButton onClick={handleSignInClick}>
          <img src={signInIcon} alt="sign in" />
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

}


const mapStateToProps = state => {
  const { error, pending, events } = state.events || {};

  return { error, pending, publicEvents: events };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPublicEvents: fetchPublicEvents
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GuestPage)

const FooterButton = styled.button`
  padding: 0px;
  margin: 4px 0;
`
const SettingsSVG = styled.img`
  padding-bottom: 8px;
`

