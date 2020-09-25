import React from 'react'
import EventDetails from '../components/EventDetails'

export default {
  title: 'EventView/EventDetails',
  component: EventDetails,
}

const Template = (args) => <EventDetails {...args} />

export const Details = Template.bind({})
Details.args = {
  event: {
    id: '7',
    poster:
      'https://www.wacken-winter-nights.com/fileadmin/_processed_/csm_wwn_20_191024-web_6495c0af7f.jpg',
    name: 'WackenWinterNights',
    street: 'Reselithweg 17',
    zip: '25596',
    location: 'Wacken',
    price: '99',
    ticketBought: false,
    website: 'https://www.wacken-winter-nights.com/',
    eventStartDate: '2021-02-14',
    eventEndDate: '2021-02-16',
    category: 'metal',
  },
}
