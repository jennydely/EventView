import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import CategoryFilter from './CategoryFilter'
import 'jest-styled-components'

describe('CategoryFilter', () => {
    const onSelectFilter = 'medieval'

    it('displays all buttons to filter', () => {
        const { getByText } = render(<CategoryFilter onSelectFilter={onSelectFilter} />)
        expect(getByText('all')).toBeInTheDocument()
        expect(getByText('medieval')).toBeInTheDocument()
        expect(getByText('metal')).toBeInTheDocument()
        expect(getByText('sand')).toBeInTheDocument()
        expect(getByText('other')).toBeInTheDocument()
    })
    it('renders correctly', () => {
        const tree = renderer.create(<CategoryFilter onSelectFilter={onSelectFilter} />)
        expect(tree).toMatchSnapshot()
    })
})