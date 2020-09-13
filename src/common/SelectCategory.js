import React from 'react'
import styled from 'styled-components/macro'

export default function SelectCategory({
  register,
  options,
  onSelectFilter,
  name,
  ...rest
}) {
  return (
    <SelectStyled name={name} ref={register} {...rest}>
      {options.map((optionsValue) => (
        <OptionStyled
          key={optionsValue}
          optionsValue={optionsValue}
          onClick={() => onSelectFilter(optionsValue)}
        >
          {optionsValue}
        </OptionStyled>
      ))}
    </SelectStyled>
  )
}

const SelectStyled = styled.select`
  display: block;
  border-radius: 4px;
  border: var(--border-darkgrey);
  margin-top: 0;
  color: black;
  background: ${({ name }) =>
    name === 'holiday'
      ? 'var(--blue-70)'
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
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  border: var(--border-darkgrey);
  margin-top: 0;
  padding: 4px;
  font-size: 100%;
  color: black;
  background: ${({ value }) =>
    value === 'holiday'
      ? 'var(--blue-70)'
      : value === 'metal'
      ? 'var(--darkgrey-75)'
      : value === 'medieval'
      ? 'var(--darkbrown-70)'
      : value === 'other'
      ? 'var(--lightbrown-70)'
      : 'var(--lightgrey-main)'};
`
