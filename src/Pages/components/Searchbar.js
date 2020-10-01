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
        onChange={(event) => setEventNameInput(event.target.value)}
      />
      <div>
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
      </div>
    </>
  )
  function handleInputKeyUp(event) {
    const inputValue = event.target.value
    if (event.key === 'Enter') {
      setEventNameInput('')
      setFilteredSuggestions([])
      if (inputValue === '') {
        return
      } else {
        handleEventSearch(inputValue)
      }
    } else if (inputValue.length < 3) {
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

    const firstPart = suggestion.slice(0, searchIndex)
    const markedPart = suggestion.slice(
      searchIndex,
      searchIndex + eventNameInput.length
    )
    const lastPart = suggestion.slice(searchIndex + eventNameInput.length)
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
  max-width: 100px;
  padding-top: 4px;
  margin: 3px 3px 0 3px;
  font-size: 140%;
  min-height: 44px;
  border-radius: 4px;
`
const SuggestionList = styled.ul`
  position: absolute;
  left: 93px;
  list-style-type: none;
  list-style-position: inside;
  margin: 4px;
  padding: 0;
  width: auto;
`
const SuggestionItems = styled.li`
  list-style-type: none;
  border-bottom: var(--border-darkgrey);
  font-size: 140%;
  border-radius: 4px;
  border: var(--border-darkgrey);
  color: var(--lightyellow-main);
  background: var(--lightgrey-main);
  padding: 7px;
  margin: 0;

  && mark {
    background: none;
    font-weight: 700;
  }
`
