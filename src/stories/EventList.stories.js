import React from 'react';
import EventList from '../componentsEventPage/EventList';

export default {
  title: 'EventPlanner/EventList',
  component: EventList,
};

const Template = (args) => <EventList {...args} />;

export const List = Template.bind({});
List.args = {
  categoryFilter: 'all',
  eventArray: [
    {
      "id": "1",
      "eventName": "Hörnerfest",
      "eventLocation": "Brande-Hörnerkirchen",
      "eventDate": "2020-06-25 - 2020-06-28",
      "category": "medieval"
    },
    {
      "id": "2",
      "eventName": "Rockharz",
      "eventLocation": "Ballenstedt",
      "eventDate": "2020-06-30 - 2020-07-04",
      "category": "metal"
    },
    {
      "id": "3",
      "eventName": "WikingerEvent",
      "eventLocation": "Damp",
      "eventDate": "2020-08-04 - 2020-08-06",
      "category": "sand"
    },
    {
      "id": "4",
      "eventName": "MPS",
      "eventLocation": "Luhmühlen",
      "eventDate": "2020-08-05 - 2020-08-06",
      "category": "medieval"
    },
    {
      "id": "5",
      "eventName": "Stove am Strand",
      "eventLocation": "Stove",
      "eventDate": "2020-09-25 - 2020-09-27",
      "category": "sand"
    },
  ]
};
