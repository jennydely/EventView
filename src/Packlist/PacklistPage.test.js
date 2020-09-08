import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import PacklistPage from './PacklistPage'
import 'jest-styled-components'

describe('PackList', () => {
    const packlistName = "festival";
    const packlists = {
        "id": 500,
        "name": "festival",
        "packlist": 
           ["Wasser",
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
        ]}

    it('displays the packlist festival', () => {
        const { getByText } = render(
        <MemoryRouter>
        <PacklistPage packlists={packlists} packlistName={packlistName} />
        </MemoryRouter>
        )
        setTimeout(() => {
            expect(getByText(packlistName)).toBeInTheDocument()
            expect(getByText('Wasser')).toBeInTheDocument()
        }, 100)
    })
it('renders correctly', () => {
    const tree = renderer.create(
        <MemoryRouter>
            <PacklistPage packlists={packlists} packlistName={packlistName} />
        </MemoryRouter>)
    expect(tree).toMatchSnapshot()
})
})