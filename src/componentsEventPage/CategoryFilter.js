import React from 'react'
import styled from 'styled-components/macro'


export default function CategoryFilter ({ onSelectFilter }) {
  
  return (
     <FilterContainer>
      <CategoryButton name="metal"  onClick={() => onSelectFilter('metal')}>metal</CategoryButton>
      <CategoryButton name="medieval" onClick={() => onSelectFilter('medieval')}>medieval</CategoryButton>
      <CategoryButton name="sand"  onClick={() => onSelectFilter('sand')}>sand</CategoryButton>  
      <CategoryButton name="others"  onClick={() => onSelectFilter('others')}>otters</CategoryButton>
      </FilterContainer>
  )
}  

const FilterContainer = styled.div `
margin 5px;
backgroundcolor: grey;
`

const CategoryButton = styled.button `
background: ${({name}) => name === 'sand' ? 'rgba(248,149,17,0.46)' : (name === 'metal' ? 'rgba(49,42,42,0.75)' : (name === 'medieval' ? 'rgba(67,40,24,0.70)' : (name === 'other' ? 'rgba(153,88,42,0.70)' : 'rgb(96,99,104)')))};
` 