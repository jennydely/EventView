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
    background: #00D4FF;
    color: #021B34
` 