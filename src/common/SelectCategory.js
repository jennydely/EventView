import React from 'react'
import styled from 'styled-components/macro'
import getColorByName from '../services/getColorByName'

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
  color: var(--lightyellow-90);
  background: ${(opt) => getColorByName(opt.value)};
`
const OptionStyled = styled.option`
  display: block;
  border-radius: 4px;
  border: var(--border-darkgrey);
  font-size: 100%;
  color: var(--lightyellow-90);
  background: ${(opt) => getColorByName(opt.optionsValue)};
`
