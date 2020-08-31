import React from 'react';
import EventItem from '../eventPage/Event';

export default {
  title: 'EventPlanner/EventItem',
  component: EventItem,
};

const Template = (args) => <EventItem {...args} />;

export const EventHeader = Template.bind({});
EventHeader.args = {
    event: {
        eventname: 'Hörnerfest',
        eventlocation: 'Brande-Hörnerkirchen',
        eventdate: '25.06.2020 - 28.06.2020'
    }
};
