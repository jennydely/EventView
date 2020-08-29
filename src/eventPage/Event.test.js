import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Event from './Event'
import 'jest-styled-components'

describe('Event', () => {
    const name = 'This is the eventname'
    const location = 'This is the eventlocation'
    const date = 'This is the eventdate'



    it('display the eventname and eventlocation', () => {
        const { getByText } = render(<Event event={{eventname: name, eventlocation: location, eventdate: date}} />)
        expect(getByText(name + ' - ' + location)).toBeInTheDocument()
        expect(getByText(date)).toBeInTheDocument()
    })
    it('renders correctly', () => {
        const tree = renderer.create(<Event event={{eventname: name, eventlocation: location, eventdate: date}}/>)
        expect(tree).toMatchSnapshot()
    })
 } )