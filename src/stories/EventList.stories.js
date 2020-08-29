import React from 'react';
import EventList from '../eventPage/EventList';

export default {
  title: 'EventPlanner/EventList',
  component: EventList,
};

const Template = (args) => <EventList {...args} />;

export const List = Template.bind({});
List.args = {
};
