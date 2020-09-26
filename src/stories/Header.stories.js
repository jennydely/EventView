import React from 'react'
import Header from '../Pages/components/Header'

export default {
  title: 'EventView/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const EventHeader = Template.bind({})
EventHeader.args = {
  eventArray: [
    {
      id: '1',
      name: 'Hörnerfest',
      location: 'Brande-Hörnerkirchen',
      eventStartDate: '2020-06-30',
      eventEndDate: '2020-07-04',
      category: 'medieval',
    },
  ],
}
