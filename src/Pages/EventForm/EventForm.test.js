import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import 'jest-styled-components'
import EventForm from './EventForm'

window.MutationObserver = require('mutation-observer')

describe('EventForm', () => {
  it('displays a form to create events', async () => {
    const onEventSave = jest.fn()
    const packlists = [
      {
        id: 500,
        name: 'festival',
        packlist: [
          'Wasser',
          'Plastikzelt',
          'Metalgürtel',
          'ausgedruckter Timetable',
        ],
      },
      {
        id: 501,
        name: 'medieval',
        packlist: [
          'Wasser',
          'Leinenzelt',
          'Bodenplane',
          'Schurwollmantel & Umhang',
        ],
      },
    ]
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <EventForm packlists={packlists} onEventSave={onEventSave} />
      </MemoryRouter>
    )

    const nameInput = getByPlaceholderText('event name')
    expect(nameInput.value).toBe('')
    fireEvent.input(nameInput, { target: { value: 'My EventName' } })
    expect(nameInput.value).toBe('My EventName')
  })

  it('renders correctly', () => {
    const onEventSave = jest.fn()
    const packlists = [
      {
        id: 500,
        name: 'festival',
        packlist: [
          'Wasser',
          'Plastikzelt',
          'Metalgürtel',
          'ausgedruckter Timetable',
        ],
      },
      {
        id: 501,
        name: 'medieval',
        packlist: [
          'Wasser',
          'Leinenzelt',
          'Bodenplane',
          'Schurwollmantel & Umhang',
        ],
      },
    ]
    const tree = render(
      <MemoryRouter>
        <EventForm packlists={packlists} onEventSave={onEventSave} />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
