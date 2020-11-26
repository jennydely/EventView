import React from 'react'
import EventList from '../Pages/EventList/EventList'
import './storybookStyles.css'

export default {
  title: 'EventView/EventList',
  component: EventList,
}

const Template = (args) => (
  <main className="storybook_main">
    <EventList {...args} />
  </main>
)

export const List = Template.bind({})
List.args = {
  categoryFilter: 'all',
  eventFilter: 'date',
  eventArray: [
    {
      id: '1',
      poster:
        'https://static.wixstatic.com/media/1fc368_de34c8a5c18841eb84ceb1c2f085b45d~mv2.jpg/v1/fill/w_600,h_851,al_c,q_85/Flyer_HF_20_4kleiner.webp',
      name: 'Hörnerfest',
      street: 'Schierenhöh 13',
      zip: '25364',
      location: 'Brande-Hörnerkirchen',
      price: '52,00',
      ticketBought: false,
      website: 'https://www.hoernerfest.com/',
      eventStartDate: '2020-06-25',
      eventEndDate: '2020-06-28',
      category: 'medieval',
      packlistCategory: 'medieval',
      isHidden: false,
    },
    {
      id: '2',
      poster:
        'https://www.rockharz-festival.com/wp-content/uploads/2020/07/rhz2020_poster_a1_juni2020_v9a_ansicht_l.jpg',
      name: 'Rockharz',
      street: 'Asmusstedt 13',
      zip: '06493',
      location: 'Ballenstedt',
      price: '127,80',
      ticketBought: false,
      website: 'https://www.rockharz-festival.com/',
      eventStartDate: '2021-06-30',
      eventEndDate: '2021-07-04',
      category: 'metal',
      packlistCategory: 'festival',
      isHidden: false,
    },
    {
      id: '3',
      poster: '',
      name: 'Wikinger Event',
      street: 'Seeuferweg 10',
      zip: '24351',
      location: 'Damp',
      price: '',
      ticketBought: false,
      website:
        'https://mittelalterland.de/produkt/loki-event-damp-04-06-2020-eroeffnung/',
      eventStartDate: '2020-08-04',
      eventEndDate: '2020-08-06',
      category: 'medieval',
      packlistCategory: 'medieval',
      isHidden: false,
    },
    {
      id: '4',
      poster:
        'https://i1.wp.com/sharpshooter-pics.de/wp-content/uploads/2020/04/92101823_3080347745345143_2618925904386064384_n.jpg?resize=620%2C960&ssl=1',
      name: 'MPS Luhmühlen',
      street: 'Westergellerser Heide',
      zip: '21394',
      location: 'Westergellersen',
      price: '20-70',
      ticketBought: false,
      website: 'https://www.spectaculum.de/termine/luhmuehlen/index.php?ref=',
      eventStartDate: '2021-08-05',
      eventEndDate: '2021-08-06',
      category: 'medieval',
      packlistCategory: 'medieval',
      isHidden: false,
    },
    {
      id: '5',
      poster: '',
      name: 'Stove am Strand',
      street: 'Stover Strand 4',
      zip: '21423',
      location: 'Drage/Winsen(Luhe)',
      price: '8-15',
      ticketBought: true,
      website:
        'http://marktvagabunden.de/index.php/naechstemaerkte/stove-elbmarsch',
      eventStartDate: '2020-09-25',
      eventEndDate: '2020-09-27',
      category: 'medieval',
      packlistCategory: 'medieval',
      isHidden: false,
    },
  ],
}
