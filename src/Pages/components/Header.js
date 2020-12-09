import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import SelectEvents from './common/SelectEvents'
import EventListFilter from './common/EventListFilter'
import CategoryFilter from './CategoryFilter'
import Searchbar from './Searchbar'
import { UserContext } from "../../providers/UserProvider";

export default function Header({
  onSelectFilter,
  onSelectEventFilter,
  onSelectEventListFilter,
  eventArray,
  eventFilter,
  chosenEventListFilter,
  categoryFilter,
  handleEventSuggestion,
  handleEventSearch,
}) {
  const hasHiddenEvent = eventArray.some((event) => event.isHidden === true)
  const hasOldEvent = eventArray.some(
    (event) => event.eventEndDate < new Date().toJSON().slice(0, 10)
  )
  const sortOptions = ['Sort by', 'Date', 'A-z', 'Z-a']
  if (hasHiddenEvent) sortOptions.push('Hidden')
  if (hasOldEvent) sortOptions.push('Old')

  const chosenEventList = [{ name: 'Public events', value: 'Public' }, { name: 'Favorite events', value: 'Favorite' }, { name: 'Private events', value: 'Private' }]
  const user = useContext(UserContext);
  console.log('headerUser', user)
  return (
    <StyledHeader>
      <FilterContainer>
        <SelectEvents
          id="filter"
          name={sortOptions}
          options={sortOptions}
          onSelectEventFilter={onSelectEventFilter}
          value={eventFilter}
        />
        <Searchbar
          handleEventSuggestion={handleEventSuggestion}
          handleEventSearch={handleEventSearch}
        />
        <CategoryFilter
          onSelectFilter={onSelectFilter}
          categoryFilter={categoryFilter}
        />
      </FilterContainer>
      {   user ? <EventListFilter
        onSelectEventListFilter={onSelectEventListFilter}
        id="EventListfilter"
        name={chosenEventList}
        options={chosenEventList}
        value={chosenEventListFilter} /> : ''}

    </StyledHeader>
  )
}
const StyledHeader = styled.header`
`


const FilterContainer = styled.div`
   max-height: 55px;
   display: flex;
    flex-direction: row;
    align-items:flex-end;
    width: 370px;
    justify-content:space-between;
`