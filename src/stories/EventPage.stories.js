import React from 'react';
import EventPage from '../EventPage';

export default {
  title: 'EventPlanner/EventPage',
  component: EventPage,
};

const Template = (args) => <EventPage {...args} />;

export const MainPage = Template.bind({});
MainPage.args = {

};