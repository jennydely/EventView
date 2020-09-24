import React from 'react'
import styled from 'styled-components/macro'
import Input from './common/Input'

export default function Searchbar() {
  return <EventSearchbar placeholder="event search" />
}

const EventSearchbar = styled(Input)`
  max-width: 158px;
  padding: 2px;
  margin: 4px;
`
