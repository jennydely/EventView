import React, { useState } from 'react'
import styled from 'styled-components/macro'
import useEvents from '../EventMain/useEvents'
import Input from './common/Input'

export default function Searchbar({ handleEventSuggestion }) {
  const { eventArray } = useEvents()
  const eventSuggestions = eventArray.map((event) => event.name)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [eventNameInput, setEventNameInput] = useState('')
  return (
    <>
      <EventSearchbar
        placeholder="search..."
        value={eventNameInput}
        onKeyUp={handleInputKeyUp}
        onChange={(e) => setEventNameInput(e.target.value)}
      />
      <ul>
        {filteredSuggestions.map((sug) => (
          <li key={sug} onClick={() => handleEventSuggestionClick(sug)}>
            {getMarkedSuggestionText(sug)}
          </li>
        ))}
      </ul>
    </>
  )
  function handleInputKeyUp(event) {
    const inputVal = event.target.value
    if (inputVal.length < 3) {
      setFilteredSuggestions([])
    } else {
      updateFilteredSuggestions()
    }
  }

  function handleEventSuggestionClick(sug) {
    setEventNameInput('')
    setFilteredSuggestions([])
    handleEventSuggestion(sug)
  }

  function updateFilteredSuggestions() {
    if (eventNameInput.length < 3) return
    setFilteredSuggestions(
      eventSuggestions.filter((s) =>
        s.toLowerCase().includes(eventNameInput.toLowerCase())
      )
    )
  }

  function getMarkedSuggestionText(suggestion) {
    const searchIndex = suggestion
      .toLowerCase()
      .indexOf(eventNameInput.toLowerCase())

    let firstPart = suggestion.slice(0, searchIndex)
    let markedPart = suggestion.slice(
      searchIndex,
      searchIndex + eventNameInput.length
    )
    let lastPart = suggestion.slice(searchIndex + eventNameInput.length)
    return (
      <>
        {firstPart}
        <mark>{markedPart}</mark>
        {lastPart}
      </>
    )
  }
}

const EventSearchbar = styled(Input)`
  max-width: 127px;
  padding-top: 4px;
  margin: 3px 3px 0 3px;
  font-size: 140%;
  min-height: 44px;
`
