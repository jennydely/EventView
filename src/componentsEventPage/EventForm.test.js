import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import renderer from 'react-test-renderer'
import EventForm from './EventForm'
import 'jest-styled-components'

window.MutationObserver = require("mutation-observer");

describe('EventForm', () => {

  it('creates a new event', async () => {
    const onSave = jest.fn()
    const { getByText, getByLabelText, getByPlaceholderText, getAllByPlaceholderText } = render(<EventForm onSave={onSave} />)

    fireEvent.change(getByLabelText('Category:'), { target: { value: 'medieval' } })
    fireEvent.input(getByPlaceholderText('event name'), { target: { value: 'My EventName' } })
    fireEvent.input(getByPlaceholderText('location of the event'), { target: { value: 'My EventLocation' } })
    fireEvent.input(getByPlaceholderText('street + number'), { target: { value: 'My Address' } })
    fireEvent.input(getByPlaceholderText('http://www.website.de'), { target: { value: 'www.website.de' } })
    fireEvent.input(getByPlaceholderText('zip'), { target: { value: '12345' } })
    fireEvent.input(getAllByPlaceholderText('yyyy-mm-dd')[0], { target: { value: '2020-05-20' } })
    fireEvent.input(getAllByPlaceholderText('yyyy-mm-dd')[1], { target: { value: '2020-05-25' } })

    fireEvent.submit(getByText('Save'))
    await waitFor(() => expect(onSave).toHaveBeenCalled())
  })

  it('displays a form to create events', async () => {
    const onSave = jest.fn()
    const { getByText, getByLabelText, getByPlaceholderText } = render(<EventForm onSave={onSave} />)

    const nameInput = getByPlaceholderText('event name')
    expect(nameInput.value).toBe('')
    fireEvent.input(nameInput, { target: { value: 'My EventName' } })
    expect(nameInput.value).toBe('My EventName')

    fireEvent.click(getByText('Reset'))
    await waitFor(() => expect(nameInput.value).toBe(''))
    expect(nameInput.value).toBe('')
    await waitFor(() => expect(getByLabelText('Category:').value).toBe('metal'))
    expect(getByLabelText('Category:').value).toBe('metal')
  /*expect(getByLabel('name').toBeInTheDocument()

  expect(getByLabel('location').toBeInTheDocument()

  expect(getByText('Duration:')).toBeInTheDocument()

  expect(getByText('Address:')).toBeInTheDocument()

  expect(getAllByRole('button')).toBeInTheDocument()
  
  await fireEvent.submit(getByTestId('1337')). */
})

it('renders correctly', () => {
  const onSave = jest.fn()
  const tree = renderer.create(<EventForm onSave={onSave} />)
  expect(tree).toMatchSnapshot()
})
})
