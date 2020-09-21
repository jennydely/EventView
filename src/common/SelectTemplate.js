import React from 'react'
import styled from 'styled-components/macro'

export default function SelectEvents({
  register,
  options,
  addMultiplyItems,
  name,
  ...rest
}) {
  return (
    <StyledSelect
      name={name}
      ref={register}
      {...rest}
      onChange={(event) => addMultiplyItems(event.target.value)}
    >
      {options.map((optionsName) => (
        <OptionStyled key={optionsName} value={optionsName}>
          {optionsName}
        </OptionStyled>
      ))}
    </StyledSelect>
  )
}

const StyledSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
`
const OptionStyled = styled.option`
  display: block;
  border-radius: 4px;
  font-size: 112.5%;
  border: var(--border-darkgrey);
  color: var(--lightyellow-90);
  background: var(--lightgrey-main);
`
