import React from 'react'
import styled from 'styled-components/macro'
import getColorOfEventCategory from '../../../services/getColorOfEventCategory'

export default function SelectCategory({
  register,
  options,
  onSelectFilter,
  name,
  ...rest
}) {
  return (
    <StyledSelect
      name={name}
      ref={register}
      {...rest}
      onChange={(event) => onSelectFilter(event.target.value)}
    >
      {options.map((optionsValue) => (
        <OptionStyled key={optionsValue} value={optionsValue}>
          {optionsValue}
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
  border: var(--border-turquoise);
  font-size: 112.5%;
  color: var(--lightyellow-main);
  background: ${(opt) => getColorOfEventCategory(opt.optionsValue)};
`
