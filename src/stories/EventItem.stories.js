import React from 'react'
import EventItem from '../components/EventItem'
import styled from 'styled-components/macro'

export default {
  title: 'EventPlanner/EventItem',
  component: EventItem,
}

const Template = (args) => (
  <EventContainer>
    <EventItem {...args} />{' '}
  </EventContainer>
)

export const ShownItem = Template.bind({})
ShownItem.args = {
  event: {
    id: '1',
    name: 'Hörnerfest',
    location: 'Brande-Hörnerkirchen',
    eventStartDate: '06/25/2020',
    eventEndDate: '06/28/2020',
    category: 'medieval',
    isHidden: false,
  },
}

export const HiddenItem = Template.bind({})
HiddenItem.args = {
  event: {
    id: '1',
    name: 'Hörnerfest',
    location: 'Brande-Hörnerkirchen',
    eventStartDate: '06/25/2020',
    eventEndDate: '06/28/2020',
    category: 'medieval',
    isHidden: true,
  },
}

const EventContainer = styled.ul`
  display: grid;
  grid-template-columns: 316px 45px;
  margin: 0;
  padding: 0;
`
