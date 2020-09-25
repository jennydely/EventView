import React from 'react'
import styled from 'styled-components/macro'
import SelectEvents from './common/SelectEvents'
import CategoryFilter from './CategoryFilter'

export default function Header({
  onSelectFilter,
  onSelectEventFilter,
  hasHiddenEvent,
  hasOldEvent,
}) {
  const sortOptions = ['date', 'a-Z', 'Z-a']
  if (hasHiddenEvent) sortOptions.push('Hidden')
  if (hasOldEvent) sortOptions.push('Old')

  return (
    <header>
      <ButtonContainer>
        <SelectEvents
          id="filter"
          name={sortOptions}
          options={sortOptions}
          onSelectEventFilter={onSelectEventFilter}
        />
      </ButtonContainer>
      <CategoryFilter onSelectFilter={onSelectFilter} />
    </header>
  )
}

const ButtonContainer = styled.div`
  margin: 5px;
`
