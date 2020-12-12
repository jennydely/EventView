import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import EventItem from './EventItem'
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootStore from "../../../reducers/rootStore.js"

const store = createStore(rootStore, {})

describe('EventItem', () => {
  const name = 'This is the eventname'
  const location = 'This is the eventlocation'
  const category = 'metal'
  const inputStartDate = '2020-06-25'
  const inputEndDate = '2020-06-28'
  const outputStartDate = '06/25/2020'
  const outputEndDate = '06/28/2020'
  const packlistCategory = 'metal'
  const visibility = 'public'
  const isStarred = false
  const onTicketCheckboxClick = jest.fn()

  it('displays the eventname and eventlocation', () => {
    const { getByText } = render(
      <Provider store={store}><EventItem
        event={{
          name,
          location,
          category,
          eventStartDate: inputStartDate,
          eventEndDate: inputEndDate,
          packlistCategory,
          visibility,
          isStarred,
        }}

        onTicketCheckboxClick={onTicketCheckboxClick}
      /></Provider>
    )
    setTimeout(() => {
      expect(getByText(name + ' - ' + location)).toBeInTheDocument()
      expect(
        getByText(outputStartDate + '-' + outputEndDate)
      ).toBeInTheDocument()
    }, 100)
  })

  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>  <EventItem
        event={{
          name,
          location,
          category,
          eventStartDate: inputStartDate,
          eventEndDate: inputEndDate,
          packlistCategory,
          visibility,
          isStarred,
        }}

        onTicketCheckboxClick={onTicketCheckboxClick}
      /></Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
