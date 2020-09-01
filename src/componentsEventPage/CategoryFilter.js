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
margin 5px;
backgroundcolor: grey;
`

const CategoryButton = styled.button `
display: inline-block;   
    border: none;
    border-radius: 20px;
    background: ${({name}) => name === 'sand' ? '#00FF27' : (name === 'metal' ? '#FFB100' : (name === 'medieval' ? '#FF006C' : (name === 'other' ? '#FF006C' : '#00D4FF')))};
    color: #021B34
    text-align: center;
    padding: 4px, 6px;
    font-size: 116%;

` 