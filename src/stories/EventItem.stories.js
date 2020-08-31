import React from 'react';
import EventItem from '../componentsEventPage/EventItem';

export default {
  title: 'EventPlanner/EventItem',
  component: EventItem,
};

const Template = (args) => <EventItem {...args} />;

export const EventHeader = Template.bind({});
EventHeader.args = {
  event: {
    id: '1',
    eventName: 'Hörnerfest',
    eventLocation: 'Brande-Hörnerkirchen',
    eventDate: '2020-06-25 - 2020-06-28',
    category: 'medieval'
  }
};
