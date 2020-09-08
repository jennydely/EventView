import React from 'react'
import { Router, Route } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import renderer from 'react-test-renderer'
import PackListPage from './PackListPage'
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
        const { getByText } = renderWithRouter(<PackListPage packlists={packlists} packlistName={packlistName} />)
        setTimeout(() => {
            expect(getByText('festival')).toBeInTheDocument()
            expect(getByText(packlists[0].name)).toBeInTheDocument()
            expect(getByText(packlists[0].packlist)).toBeInTheDocument()
        }, 100)
    })
it('renders correctly', () => {
    const tree = renderer.create(<PackListPage packlists={packlists} packlistName={packlistName} />)
    expect(tree).toMatchSnapshot()
})
})