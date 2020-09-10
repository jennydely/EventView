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
    <SelectStyled name={name} ref={register} {...rest}>
      {options.map((optionsName) => (
        <OptionStyled
          key={optionsName}
          optionsName={optionsName}
          onClick={() => onSelectEventFilter(optionsName)}
        >
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
  color: black;
  background: ${({ name }) =>
    name === 'sand'
      ? 'var(--yellow-46)'
      : name === 'metal'
      ? '(--darkgrey-75)'
      : name === 'medieval'
      ? 'var(--darkbrown-70)'
      : name === 'other'
      ? 'var(--lightbrown-70)'
      : 'var(--lightgrey-main)'};
`
const OptionStyled = styled.option`
  display: block;
  border-radius: 4px;
  border: var(--border-darkgrey);
  color: black;
  background: ${({ value }) =>
    value === 'sand'
      ? 'var(--yellow-46)'
      : value === 'metal'
      ? 'var(--darkgrey-75)'
      : value === 'medieval'
      ? 'var(--darkbrown-70)'
      : value === 'other'
      ? 'var(--lightbrown-70)'
      : 'var(--lightgrey-main)'};
`
