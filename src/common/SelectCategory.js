import React from "react";
import styled from 'styled-components/macro'


export default function SelectCategory({ register, options, onSelectFilter, name, ...rest }) {
  
  return (
    <SelectStyled name={name} ref={register} {...rest} >
      {options.map(value => (
        <OptionStyled key={value} value={value} onClick={() => onSelectFilter(value)}>
          {value}
        </OptionStyled>
      ))} 
      </SelectStyled>
  );
}

const SelectStyled  = styled.select`
display: block;
width: 100%;
padding: 20px;
border-radius: 4px;
border: 1px solid var(--blue-50);
margin-top: 0;
padding: 4px;
font-size: 100%;
color: black;
background: ${({ name }) => name === 'sand' ? 'rgba(248,149,17,0.46)' : (name === 'metal' ? 'rgba(49,42,42,0.75)' : (name === 'medieval' ? 'rgba(67,40,24,0.70)' : (name === 'other' ? 'rgba(153,88,42,0.70)' : 'rgb(96,99,104)')))};
` 
const OptionStyled  = styled.option`
display: block;
width: 100%;
padding: 20px;
border-radius: 4px;
border: 1px solid var(--blue-50);
margin-top: 0;
padding: 4px;
font-size: 100%;
color: black;
background: ${({ value }) => value === 'sand' ? 'rgba(248,149,17,0.46)' : (value === 'metal' ? 'rgba(49,42,42,0.75)' : (value === 'medieval' ? 'rgba(67,40,24,0.70)' : (value === 'other' ? 'rgba(153,88,42,0.70)' : 'rgb(96,99,104)')))};
` 