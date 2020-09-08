import React from 'react';
import PackListPage from '../PackListPage';

export default {
    title: 'EventPlanner/Packlist',
    component: PackListPage,
};

const Template = (args) => <PackListPage {...args} />;

export const List = Template.bind({});
List.args = {
    packlistName: 'festival',
    packlists: [{
        id: 500,
        name: 'festival',
        packlist: ["Wasser",
            "Plastikzelt",
            "Campingkocher",
            "Essen",
            "Pfanne & Öl",
            "Cola",
            "Festivalbox I",
            "Festivalbox II",
            "Ticket",
            "Waschschale",
            "Teppich",
            "Isomatte",
            "Luftmatratze",
            "Bettdecke & Kissen",
            "Knicklichter",
            "Alu-Herringe",
            "Powerbank & Ladekabel",
            "Kopftuch",
            "Portmornai mit Bargeld",
            "Kulturtasche",
            "Handtücher",
            "Kleidung",
            "Cider",
            "Metalgürtel",
            "ausgedruckter Timetable"
        ]}, {}]
};
