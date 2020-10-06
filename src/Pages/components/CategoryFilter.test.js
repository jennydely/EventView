import React from 'react'
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react'
import 'jest-styled-components'
import CategoryFilter from './CategoryFilter'

afterEach(cleanup)
window.MutationObserver = require('mutation-observer')
describe('Test category filter', () => {
  const mockedOptions = [
    { value: 'Category' },
    { value: 'All' },
    { value: 'Metal' },
    { value: 'Medieval' },
    { value: 'Holiday' },
    { value: 'Other' },
  ]

  it('should render without errors', async () => {
    const mockedOnChange = jest.fn()
    const { getByText } = render(
      <CategoryFilter options={mockedOptions} onSelectFilter={mockedOnChange} />
    )

    const placeholder = getByText('Category')

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
    await waitFor(() => expect(getByText('Metal')).toBeVisible())
    //fireEvent.click(getByText('metal'))
    fireEvent.change(mySelectComponent, {
      target: { value: 'Metal' },
    })

    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledWith('Metal'))
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
    await waitFor(() => getByText('All'))
    fireEvent.change(mySelectComponent, {
      target: { value: 'All' },
    })

    fireEvent.keyDown(mySelectComponent, { key: 'ArrowDown' })
    await waitFor(() => getByText('Metal'))
    fireEvent.change(mySelectComponent, {
      target: { value: 'Metal' },
    })

    fireEvent.keyDown(mySelectComponent, { key: 'ArrowDown' })
    await waitFor(() => getByText('Holiday'))
    fireEvent.change(mySelectComponent, {
      target: { value: 'Holiday' },
    })

    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledTimes(3))
    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledWith('Holiday'))
  })

  it('should call onChange when filtering by input value', async () => {
    const mockedOnChange = jest.fn()
    const { getByText, queryByTestId, container } = render(
      <CategoryFilter options={mockedOptions} onSelectFilter={mockedOnChange} />
    )

    const mySelectComponent = queryByTestId('my-select-component')

    fireEvent.change(container.querySelector('select'), {
      target: { value: 'All' },
    })
    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledTimes(1))

    await waitFor(() => getByText('Other'))
    fireEvent.change(mySelectComponent, {
      target: { value: 'Other' },
    })

    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledTimes(2))
    await waitFor(() => expect(mockedOnChange).toHaveBeenCalledWith('Other'))
  })
})
