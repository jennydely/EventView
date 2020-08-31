import React from 'react';
import styled from 'styled-components/macro'
import CategoryFilter from './CategoryFilter'

export default function Header({ onSelectFilter }) {
    return (
        <header>
            <ButtonContainer>
                <ShowAllButton name="all" onClick={() => onSelectFilter('all')}>All</ShowAllButton>
            </ButtonContainer>
            <CategoryFilter onSelectFilter={onSelectFilter} />
        </header>
    )
}

const ButtonContainer = styled.div`
   
`

const ShowAllButton = styled.button`
display: inline-block;
    font-weight: 200;
    height: 25px;
    width: 95px;
    text-align:center;
    border: none;
    border-radius: 20px;
    font-size: 11px;
    background: ${({ name }) => name === 'sand' ? '#00FF27' : (name === 'metal' ? '#FFB100' : (name === 'medieval' ? '#FF006C' : (name === 'other' ? '#FF006C' : '#00D4FF')))};
    color: #021B34

` 