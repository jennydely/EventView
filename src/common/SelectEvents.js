import React from 'react'
import styled from 'styled-components/macro'

export default function SelectEvents({
  register,
  options,
  onSelectEventFilter,
  name,
  ...rest
}) {
  return (
    <SelectStyled
      name={name}
      ref={register}
      {...rest}
      onChange={(event) => onSelectEventFilter(event.target.value)}
    >
      {options.map((optionsName) => (
        <OptionStyled key={optionsName} value={optionsName}>
          {optionsName}
        </OptionStyled>
      ))}
    </SelectStyled>
  )
}

const SelectStyled = styled.select`
  display: block;
  border-radius: 4px;
  border: var(--border-darkgrey);
  color: var(--lightyellow-90);
  background: var(--lightgrey-main);
  min-height: 45px;
`
const OptionStyled = styled.option`
  display: block;
  border-radius: 4px;
  font-size: 112.5%;
  border: var(--border-darkgrey);
  color: var(--lightyellow-90);
  background: var(--lightgrey-main);
`
