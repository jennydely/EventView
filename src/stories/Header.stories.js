import React from 'react';
import Header from '../components/Header';

export default {
  title: 'EventPlanner/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const EventHeader = Template.bind({});
EventHeader.args = {
    name: 'all'
};
