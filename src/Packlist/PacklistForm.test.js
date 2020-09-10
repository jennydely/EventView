import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import PacklistForm from './PacklistForm'
import 'jest-styled-components'

window.MutationObserver = require('mutation-observer')

describe('PacklistForm', () => {
  it('creates a new packlist with item', async () => {
    const onPacklistSave = jest.fn()
    const { getByText, getByPlaceholderText } = render(
      <PacklistForm onPacklistSave={onPacklistSave} />
    )

    fireEvent.input(getByPlaceholderText('PackList name'), {
      target: { value: 'Packlist' },
    })
    fireEvent.input(
      getByPlaceholderText('Item you need or task you have to do'),
      {
        target: { value: 'needed item' },
      }
    )
    fireEvent.click(getByText('Add'))
    expect(getByText('needed item')).toBeInTheDocument()

    fireEvent.submit(getByText('Save'))
    await waitFor(() => expect(onPacklistSave).toHaveBeenCalled())
  })

  it('displays a form to create packlist', async () => {
    const onPacklistSave = jest.fn()
    const { getByText, getByPlaceholderText } = render(
      <PacklistForm onPacklistSave={onPacklistSave} />
    )

    const nameInput = getByPlaceholderText('PackList name')
    expect(nameInput.value).toBe('')
    fireEvent.input(nameInput, { target: { value: 'My PacklistName' } })
    expect(nameInput.value).toBe('My PacklistName')

    fireEvent.click(getByText('Reset'))
    await waitFor(() => expect(nameInput.value).toBe(''))
  })

  it('renders correctly', () => {
    const onPacklistSave = jest.fn()
    const tree = render(<PacklistForm onPacklistSave={onPacklistSave} />)
    expect(tree).toMatchSnapshot()
  })
})
