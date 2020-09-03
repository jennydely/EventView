import React from 'react';
import EventList from '../componentsEventPage/EventList';

export default {
  title: 'EventPlanner/EventList',
  component: EventList,
};

const Template = (args) => <EventList {...args} />;

export const List = Template.bind({});
List.args = {
  categoryFilter: 'medieval',
  eventArray: [
    {
      "id": "1",
      "eventName": "Hörnerfest",
      "eventLocation": "Brande-Hörnerkirchen",
      "eventStartDate": "06/25/2020",
      "eventEndDate": '06/28/2020',
      "category": "medieval"
    },
    {
      "id": "2",
      "eventName": "Rockharz",
      "eventLocation": "Ballenstedt",
      "eventStartDate": "06/30/2020",
      "eventEndDate": '07/04/2020',
      "category": "metal"
    },
    {
      "id": "3",
      "eventName": "WikingerEvent",
      "eventLocation": "Damp",
      "eventStartDate": "08/04/2020",
      "eventEndDate": '08/06/2020',
      "category": "sand"
    },
    {
      "id": "4",
      "eventName": "MPS",
      "eventLocation": "Luhmühlen",
      "eventStartDate": "08/05/2020",
      "eventEndDate": '08/06/2020',
      "category": "medieval"
    },
    {
      "id": "5",
      "eventName": "Stove am Strand",
      "eventLocation": "Stove",
      "eventStartDate": "09/25/2020",
      "eventEndDate": '09/27/2020',
      "category": "sand"
    },
  ]
};
