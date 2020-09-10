import React from 'react';
import EventForm from '../components/EventForm';

export default {
  title: 'EventPlanner/EventForm',
  component: EventForm,
};

const Template = (args) => <EventForm {...args} />;

export const Formular = Template.bind({});
Formular.args = {
  packlists:['medieval', 'festival']

};
