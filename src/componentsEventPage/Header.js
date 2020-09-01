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
   margin: 5px;
`

const ShowAllButton = styled.button`
display: inline-block;
    border: none;
    border-radius: 20px;
    background: #00D4FF;
    color: #021B34
    text-align: center;
    padding: 4px, 6px;
    font-size: 116%;

` 