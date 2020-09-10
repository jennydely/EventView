import React from 'react'
import styled from 'styled-components/macro'
import CategoryFilter from './CategoryFilter'
import SelectEvents from '../common/SelectEvents'

export default function Header({ onSelectFilter, onSelectEventFilter }) {
  const sortOptions = ['date', 'a-Z', 'Z-a']
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
