import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import CategoryFilter from './CategoryFilter'
import 'jest-styled-components'

describe('CategoryFilter', () => {
    const onSelectFilter = jest.fn()
  

    it('displays all buttons to filter and test the filter function', () => {
        const { getByText} = render(<CategoryFilter onSelectFilter={onSelectFilter} />)
        expect(getByText('all')).toBeInTheDocument()
        expect(getByText('medieval')).toBeInTheDocument()
        expect(getByText('metal')).toBeInTheDocument()
        expect(getByText('sand')).toBeInTheDocument()
        expect(getByText('other')).toBeInTheDocument()
        fireEvent.click(getByText('medieval'));
        expect(onSelectFilter).toHaveBeenCalledWith('medieval');
        })
    it('renders correctly', () => {
        const tree = renderer.create(<CategoryFilter onSelectFilter={onSelectFilter} />)
        expect(tree).toMatchSnapshot()
    })
})