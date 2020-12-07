import React from 'react'
import styled from 'styled-components/macro'

export default function SelectEvents({
  register,
  options,
  onSelectEventList,
  name,
  ...rest
}) {
  return (
    <StyledSelect
      name={name}
      ref={register}
      {...rest}
      onChange={(event) => onSelectEventList(event.target.value)}
    >
      {options.map((optionsEventListName) => (
        <OptionStyled key={optionsEventListName} value={optionsEventListName}>
          {optionsEventListName}
        </OptionStyled>
      ))}
    </StyledSelect>
  )
}

const StyledSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  max-height: 55px;
`
const OptionStyled = styled.option`
  display: block;
  max-height: 55px;
  border-radius: 4px;
  font-size: 112.5%;
  border: var(--borderColor);
  color: var(--font-color);
  background: var(--optionsBG);
`
