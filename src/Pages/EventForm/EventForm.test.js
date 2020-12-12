import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import 'jest-styled-components'
import EventForm from './EventForm'
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootStore from "../../reducers/rootStore.js"

window.MutationObserver = require('mutation-observer')

const store = createStore(rootStore, {})

describe('EventForm', () => {
  it('displays a form to create events', async () => {
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
    const onSubmit = jest.fn()
    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}> <MemoryRouter>
        <EventForm packlists={packlists} onSubmit={onSubmit} />
      </MemoryRouter>
      </Provider>
    )

    const nameInput = getByPlaceholderText('event name')
    const categorySelect = getByTestId('category')
    const visibilitySelect = getByTestId('visibility')
    const locationInput = getByPlaceholderText('location of the event')
    const eventStartDateInput = getByPlaceholderText('start date')
    const eventEndDateInput = getByPlaceholderText('end date')
    const websiteInput = getByPlaceholderText('http://www.website.de')

    expect(nameInput.value).toBe('')
    expect(categorySelect.value).toBe('Metal')
    expect(visibilitySelect.value).toBe('private')
    expect(locationInput.value).toBe('')
    expect(eventStartDateInput.value).toBe('')
    expect(eventEndDateInput.value).toBe('')
    expect(websiteInput.value).toBe('')


    fireEvent.input(nameInput, { target: { value: 'My Eventname' } })
    expect(nameInput.value).toBe('My Eventname')
    fireEvent.select(categorySelect, { target: { value: 'Medieval' } })
    expect(categorySelect.value).toBe('Medieval')
    fireEvent.select(visibilitySelect, { target: { value: 'public' } })
    expect(visibilitySelect.value).toBe('public')
    fireEvent.input(locationInput, { target: { value: 'My Eventlocation' } })
    expect(locationInput.value).toBe('My Eventlocation')
    fireEvent.change(eventStartDateInput, { target: { value: '2020-05-18' } })
    expect(eventStartDateInput.value).toBe('2020-05-18')
    fireEvent.change(eventEndDateInput, { target: { value: '2020-05-20' } })
    expect(eventEndDateInput.value).toBe('2020-05-20')
    fireEvent.input(websiteInput, { target: { value: 'www.test.de' } })
    expect(websiteInput.value).toBe('www.test.de')

  })

  it('renders correctly', () => {
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
    const onSubmit = jest.fn()
    const tree = render(
      <Provider store={store}>
        <MemoryRouter>
          <EventForm packlists={packlists} onSubmit={onSubmit} />
        </MemoryRouter>
      </Provider>
    )
    expect(tree).toMatchSnapshot()
  })
})
