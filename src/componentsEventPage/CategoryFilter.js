import React from 'react'
import styled from 'styled-components/macro'
import SelectCategory from '../common/SelectCategory'


export default function CategoryFilter({ onSelectFilter }) {
 
  return (
    <FilterContainer>
      <SelectCategory id="category" name={["all", "metal", "medieval", "sand", "other"]} 
        options={["all", "metal", "medieval", "sand", "other"]}  onSelectFilter={onSelectFilter}/>
    </FilterContainer>
  )
}

const FilterContainer = styled.div`
margin 5px;
backgroundcolor: grey;
`
