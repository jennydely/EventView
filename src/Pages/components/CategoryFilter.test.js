import React from 'react'
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react'
import 'jest-styled-components'
import CategoryFilter from './CategoryFilter'

afterEach(cleanup)
window.MutationObserver = require('mutation-observer')
describe('Test category filter', () => {
  const mockedOptions = [
    { value: 'category' },
    { value: 'all' },
    { value: 'metal' },
    { value: 'medieval' },
    { value: 'holiday' },
    { value: 'other' },
  ]

  it('should render without errors', async () => {
    const mockedOnChange = jest.fn()
    const { getByText } = render(
      <CategoryFilter options={mockedOptions} onSelectFilter={mockedOnChange} />
    )

    const placeholder = getByText('category')

    expect(placeholder).toBeTruthy()
  })

  it('should call onChange when the first option is selected', async () => {
    const mockedOnChange = jest.fn()
    const { getByText, queryByTestId } = render(
      <CategoryFilter options={mockedOptions} onSelectFilter={mockedOnChange} />
    )

    const mySelectComponent = queryByTestId('my-select-component')

    expect(mySelectComponent).toBeDefined()
    expect(mySelectComponent).not.toBeNull()
    expect(mockedOnChange).toHaveBeenCalledTimes(0)

    fireEvent.keyDown(mySelectComponent, { key: 'ArrowDown' })
    await waitFor(() => expect(getByText('metal')).toBeVisible())
    //fireEvent.click(getByText('metal'))
    fireEvent.change(mySelectComponent, {
      target: { value: 'metal' },
    })

    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledWith('metal'))
  })

  it('should call onChange when the first option is selected then second option then the 4th one', async () => {
    const mockedOnChange = jest.fn()
    const { getByText, queryByTestId } = render(
      <CategoryFilter options={mockedOptions} onSelectFilter={mockedOnChange} />
    )

    const mySelectComponent = queryByTestId('my-select-component')

    expect(mySelectComponent).toBeDefined()
    expect(mySelectComponent).not.toBeNull()
    expect(mockedOnChange).toHaveBeenCalledTimes(0)

    fireEvent.keyDown(mySelectComponent, { key: 'ArrowDown' })
    await waitFor(() => getByText('all'))
    fireEvent.change(mySelectComponent, {
      target: { value: 'all' },
    })

    fireEvent.keyDown(mySelectComponent, { key: 'ArrowDown' })
    await waitFor(() => getByText('metal'))
    fireEvent.change(mySelectComponent, {
      target: { value: 'metal' },
    })

    fireEvent.keyDown(mySelectComponent, { key: 'ArrowDown' })
    await waitFor(() => getByText('holiday'))
    fireEvent.change(mySelectComponent, {
      target: { value: 'holiday' },
    })

    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledTimes(3))
    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledWith('holiday'))
  })

  it('should call onChange when filtering by input value', async () => {
    const mockedOnChange = jest.fn()
    const { getByText, queryByTestId, container } = render(
      <CategoryFilter options={mockedOptions} onSelectFilter={mockedOnChange} />
    )

    const mySelectComponent = queryByTestId('my-select-component')

    fireEvent.change(container.querySelector('select'), {
      target: { value: 'all' },
    })
    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledTimes(1))

    await waitFor(() => getByText('other'))
    fireEvent.change(mySelectComponent, {
      target: { value: 'other' },
    })

    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledTimes(2))
    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledWith('other'))
  })
})
