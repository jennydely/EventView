import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PacklistForm from './PacklistForm'
import 'jest-styled-components'

window.MutationObserver = require('mutation-observer')

describe('PacklistForm', () => {
  it('creates a new packlist with item', async () => {
    const { getByText, getByAltText, getByPlaceholderText } = render(
      <MemoryRouter>
        {' '}
        <PacklistForm />
      </MemoryRouter>
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
    fireEvent.click(getByAltText('add'))
    expect(getByText('needed item')).toBeInTheDocument()
  })

  it('displays a form to create packlist', async () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <PacklistForm />
      </MemoryRouter>
    )

    const nameInput = getByPlaceholderText('PackList name')
    expect(nameInput.value).toBe('')
    fireEvent.input(nameInput, { target: { value: 'My PacklistName' } })
    expect(nameInput.value).toBe('My PacklistName')
  })

  it('renders correctly', () => {
    const tree = render(
      <MemoryRouter>
        <PacklistForm />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
