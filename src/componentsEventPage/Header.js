import React from 'react';
import styled from 'styled-components/macro'
import CategoryFilter from './CategoryFilter'

export default function Header({ onSelectFilter }) {
    return (
        <header>
            <ButtonContainer>
                <button name="all" onClick={() => onSelectFilter('all')}>All</button>
            </ButtonContainer>
            <CategoryFilter onSelectFilter={onSelectFilter} />
        </header>
    )
}

const ButtonContainer = styled.div`
   margin: 5px;
   width: wh%;
`