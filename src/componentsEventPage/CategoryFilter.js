import React from 'react'
import styled from 'styled-components/macro'


export default function CategoryFilter ({ onSelectFilter }) {
  
  return (
     <FilterContainer>
      <CategoryButton name="metal"  onClick={() => onSelectFilter('metal')}>metal</CategoryButton>
      <CategoryButton name="medieval" onClick={() => onSelectFilter('medieval')}>medieval</CategoryButton>
      <CategoryButton name="sand"  onClick={() => onSelectFilter('sand')}>sand</CategoryButton>  
      <CategoryButton name="others"  onClick={() => onSelectFilter('others')}>others</CategoryButton>
      </FilterContainer>
  )
  
}  

const FilterContainer = styled.div `
`

const CategoryButton = styled.button `
display: inline-block;
    font-weight: 200;
    height: 25px;
    width: 95px;
    text-align:center;
    border: none;
    border-radius: 20px;
    font-size: 11px;
    background: ${({name}) => name === 'sand' ? '#00FF27' : (name === 'metal' ? '#FFB100' : (name === 'medieval' ? '#FF006C' : (name === 'other' ? '#FF006C' : '#00D4FF')))};
    color: #021B34

` 