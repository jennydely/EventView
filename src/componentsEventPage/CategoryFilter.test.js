import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import CategoryFilter from './CategoryFilter'
import 'jest-styled-components'

describe('CategoryFilter', () => {
    const onSelectFilter = 'medieval'

    it('displays all buttons to filter', () => {
        const { getAllByText } = render(<CategoryFilter onSelectFilter={onSelectFilter} />)
            expect(getAllByText('medieval')).toHaveLength(2)
            expect(getAllByText('metal')).toHaveLength(2)
            expect(getAllByText('sand')).toHaveLength(2)
            expect(getAllByText('other')).toHaveLength(2)
    })
    it('renders correctly', () => {
        const tree = renderer.create(<CategoryFilter onSelectFilter={onSelectFilter} />)
        expect(tree).toMatchSnapshot()
    })
})