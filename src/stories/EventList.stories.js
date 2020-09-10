import React from 'react';
import EventList from '../components/EventList';

export default {
  title: 'EventPlanner/EventList',
  component: EventList,
};

const Template = (args) => <EventList {...args} />;

export const List = Template.bind({});
List.args = {
  categoryFilter: 'all',
  eventFilter: 'date',
  eventArray: [
    {
      "id": "1",
      "name": "Hörnerfest",
      "location": "Brande-Hörnerkirchen",
      "eventStartDate": "2020-06-30",
      "eventEndDate": "2020-07-04",
      "category": "medieval"
    },
    {
      "id": "2",
      "name": "Rockharz",
      "location": "Ballenstedt",
      "eventStartDate": "2020-06-30",
      "eventEndDate": '2020-07-04',
      "category": "metal"
    },
    {
      "id": "3",
      "name": "WikingerEvent",
      "location": "Damp",
      "eventStartDate": "2020-08-04",
      "eventEndDate": '2020-08-06',
      "category": "sand"
    },
    {
      "id": "4",
      "name": "MPS",
      "location": "Luhmühlen",
      "eventStartDate": "2020-08-05",
      "eventEndDate": '2020-08-06',
      "category": "medieval"
    },
    {
      "id": "5",
      "name": "Stove am Strand",
      "location": "Stove",
      "eventStartDate": "2020-09-25",
      "eventEndDate": '2020-09-27',
      "category": "sand"
    },
  ]
};
