import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import 'jest-styled-components'
import EventForm from './EventForm'

window.MutationObserver = require('mutation-observer')

describe('EventForm', () => {
  it('creates a new event', async () => {
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
    const { getByAltText, getByLabelText, getByPlaceholderText } = render(
      <EventForm packlists={packlists} onEventSave={onEventSave} />
    )

    fireEvent.change(getByLabelText('Category:'), {
      target: { value: 'medieval' },
    })
    fireEvent.input(getByPlaceholderText('event name'), {
      target: { value: 'My EventName' },
    })
    fireEvent.input(getByPlaceholderText('location of the event'), {
      target: { value: 'My EventLocation' },
    })
    fireEvent.input(getByPlaceholderText('street + number'), {
      target: { value: 'My Address' },
    })
    fireEvent.input(getByPlaceholderText('http://www.website.de'), {
      target: { value: 'www.website.de' },
    })
    fireEvent.input(getByPlaceholderText('zip'), { target: { value: '12345' } })

    const startDate = getByPlaceholderText('start date')
    fireEvent.mouseDown(startDate)
    fireEvent.change(startDate, { target: { value: '2020-05-25' } })

    const endDate = getByPlaceholderText('end date')
    fireEvent.mouseDown(endDate)
    fireEvent.change(endDate, { target: { value: '2020-05-25' } })

    fireEvent.submit(getByAltText('save'))
    await waitFor(() => expect(onEventSave).toHaveBeenCalled())
  })

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
    const { getByLabelText, getByAltText, getByPlaceholderText } = render(
      <EventForm packlists={packlists} onEventSave={onEventSave} />
    )

    const nameInput = getByPlaceholderText('event name')
    expect(nameInput.value).toBe('')
    fireEvent.input(nameInput, { target: { value: 'My EventName' } })
    expect(nameInput.value).toBe('My EventName')

    fireEvent.click(getByAltText('reload'))
    await waitFor(() => expect(nameInput.value).toBe(''))
    expect(nameInput.value).toBe('')
    await waitFor(() => expect(getByLabelText('Category:').value).toBe('metal'))
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
      <EventForm packlists={packlists} onEventSave={onEventSave} />
    )
    expect(tree).toMatchSnapshot()
  })
})
