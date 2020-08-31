import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import EventList from './EventList'
import 'jest-styled-components'

describe('EventList', () => {
    const headline = 'Event 2020'
    const event = 'Rockharz - Ballenstedt'



    it('display the headline and an example event', () => {
        const { getByText } = render(<EventList />)
        expect(getByText(headline)).toBeInTheDocument()
        expect(getByText(event)).toBeInTheDocument()
    })
    it('renders correctly', () => {
        const tree = renderer.create(<EventList/>)
        expect(tree).toMatchSnapshot()
    })
 } )