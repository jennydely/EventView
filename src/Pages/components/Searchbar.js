import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import useEvents from '../EventMain/useEvents'
import Input from './common/Input'

export default function Searchbar({
  handleEventSuggestion,
  handleEventSearch,
}) {
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
      <SuggestionContainer>
        <SuggestionList>
          {filteredSuggestions.map((sug) => (
            <SuggestionItems
              key={uuid()}
              onClick={() => handleEventSuggestionClick(sug)}
            >
              {getMarkedSuggestionText(sug)}
            </SuggestionItems>
          ))}
        </SuggestionList>
      </SuggestionContainer>
    </>
  )
  function handleInputKeyUp(event) {
    const inputVal = event.target.value
    if (event.key === 'Enter') {
      setEventNameInput('')
      setFilteredSuggestions([])
      handleEventSearch(inputVal)
    } else if (inputVal.length < 3) {
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
  border-radius: 4px;
`
const SuggestionContainer = styled.div``
const SuggestionList = styled.ul`
  position: absolute;
  left: 93px;
  list-style-type: none;
  list-style-position: inside;
  margin: 4px;
  padding: 0;
  box-shadow: 0.05em 0.01em 0.5em rgba(0, 0, 0, 0.2);
  width: auto;
`
const SuggestionItems = styled.li`
  list-style-type: none;
  color: #193251;
  border-bottom: 1px solid #ddd;
  font-size: 140%;
  border-radius: 4px;
  border: var(--border-darkgrey);
  color: var(--lightyellow-90);
  background: rgb(96, 99, 104);
  padding: 7px;
  margin: 0;

  && mark {
    background: none;
    font-weight: 700;
  }
`
