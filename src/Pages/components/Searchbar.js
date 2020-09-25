import React from 'react'
import styled from 'styled-components/macro'
import Input from './common/Input'

export default function Searchbar() {
  return <EventSearchbar placeholder="search..." />
}

const EventSearchbar = styled(Input)`
  max-width: 127px;
  padding-top: 4px;
  margin: 3px 3px 0 3px;
  font-size: 140%;
  min-height: 44px;
`
