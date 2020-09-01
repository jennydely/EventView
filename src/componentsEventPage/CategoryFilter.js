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

    background: ${({name}) => name === 'sand' ? '#00FF27' : (name === 'metal' ? '#FFB100' : (name === 'medieval' ? '#FF006C' : (name === 'other' ? '#FF006C' : '#00D4FF')))};
    color: #021B34
 


` 