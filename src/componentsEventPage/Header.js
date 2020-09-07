import React from 'react';
import styled from 'styled-components/macro'
import CategoryFilter from './CategoryFilter'
import SelectEvents from '../common/SelectEvents';

export default function Header({ onSelectFilter, onSelectEventFilter}) {
    return (
        <header>
            <ButtonContainer>
                <SelectEvents id="filter" name={["date", "a-Z"]}
                    options={["date", "a-Z"]} onSelectEventFilter={onSelectEventFilter}/>
            </ButtonContainer>
            <CategoryFilter onSelectFilter={onSelectFilter} />
        </header>
    )
}

const ButtonContainer = styled.div`
   margin: 5px;
`