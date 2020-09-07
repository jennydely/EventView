import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Header from './Header'
import 'jest-styled-components'

describe('Header', () => {
    const onSelectFilter = 'all'

    it('displays the sort by date function', () => {
        const { getByText } = render(<Header onSelectFilter={onSelectFilter} />)
            expect(getByText('date')).toBeInTheDocument()
    })
    it('renders correctly', () => {
        const tree = renderer.create(<Header onSelectFilter={onSelectFilter} />)
        expect(tree).toMatchSnapshot()
    })
})