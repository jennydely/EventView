import React from 'react';
import EventForm from '../componentsEventPage/EventForm';

export default {
  title: 'EventPlanner/EventForm',
  component: EventForm,
};

const Template = (args) => <EventForm {...args} />;

export const Formular = Template.bind({});
Formular.args = {

};
