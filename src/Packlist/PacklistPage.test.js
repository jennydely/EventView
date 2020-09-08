import React from 'react'
import { Router, Route, MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import renderer from 'react-test-renderer'
import PacklistPage from './PacklistPage'
import 'jest-styled-components'

const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    history.push('/packlist/festival')
    return { 
    ...render (
    <Router history={history}>
        <Route path='/packlist/:packlistName?'>

            {component}
        </Route>
    </Router>
    )
  }
}

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
           <PacklistPage packlists={packlists} packlistName={packlistName} />)
           </MemoryRouter>
        )
            expect(getByText('festival')).toBeInTheDocument()
            expect(getByText(packlists[0].name)).toBeInTheDocument()
            expect(getByText(packlists[0].packlist)).toBeInTheDocument()
        
    })
it('renders correctly', () => {
    const tree = renderer.create(
        <MemoryRouter>
    <PacklistPage packlists={packlists} packlistName={packlistName} />
    </MemoryRouter>)
    expect(tree).toMatchSnapshot()
})
})