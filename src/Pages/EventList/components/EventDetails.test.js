import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import 'jest-styled-components'
import EventDetails from './EventDetails'
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootStore from "../../../reducers/rootStore.js"

const store = createStore(rootStore, {})
store.subscribe(() => {
  console.log(store.getState());
  saveState(store.getState());
});


describe('EventDetails', () => {
  const onTicketCheckboxClick = jest.fn()
  const event = {
    id: '7',
    poster:
      'https://www.wacken-winter-nights.com/fileadmin/_processed_/csm_wwn_20_191024-web_6495c0af7f.jpg',
    name: 'WackenWinterNights',
    street: 'Reselithweg 17',
    zip: '25596',
    location: 'Wacken',
    price: '99',
    ticketBought: false,
    website: 'https://www.wacken-winter-nights.com/',
    eventStartDate: '2021-02-14',
    eventEndDate: '2021-02-16',
    category: 'metal',
    visibility: 'public',
    isStarred: false
  }

  it('displays the eventdetails, like name, location & price', () => {
    const { getByText, getAllByTitle, getByTestId } = render(
      <Provider store={store}> <EventDetails event={event} onTicketCheckboxClick={onTicketCheckboxClick} /> </Provider>
    )

    expect(getByText(event.name)).toBeInTheDocument()
    expect(getByText(event.zip + ' ' + event.location)).toBeInTheDocument()
    expect(getByText(event.street)).toBeInTheDocument()
    expect(getByText(event.price + ' €')).toBeInTheDocument()
    expect(getAllByTitle('link')).toHaveLength(2)
  })
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}> <EventDetails event={event} onTicketCheckboxClick={onTicketCheckboxClick} /> </Provider>
    )
    expect(tree).toMatchSnapshot()
  })
})
