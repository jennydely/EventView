import React from 'react';
import EventItem from '../components/EventItem';

export default {
  title: 'EventPlanner/EventItem',
  component: EventItem,
};

const Template = (args) => <EventItem {...args} />;

export const EventHeader = Template.bind({});
EventHeader.args = {
  event: {
    id: '1',
    name: 'Hörnerfest',
    location: 'Brande-Hörnerkirchen',
    eventStartDate: "06/25/2020",
    eventEndDate: '06/28/2020',
    category: 'medieval'
  }
};
