import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Event from './Event'
import 'jest-styled-components'

describe('Event', () => {
    const name = 'This is the eventname'
    const location = 'This is the eventlocation'
    const inputDate = '2020-06-25 - 2020-06-28'
    const outputDate = '06/25/2020 - 06/28/2020'
    


    it('display the eventname and eventlocation', () => {
        const { getByText } = render(<Event event={{eventName: name, eventLocation: location, eventDate: inputDate}} />)
        expect(getByText(name + ' - ' + location)).toBeInTheDocument()
        expect(getByText(outputDate)).toBeInTheDocument()
    })
    it('renders correctly', () => {
        const tree = renderer.create(<Event event={{eventName: name, eventLocation: location, eventDate: inputDate}}/>)
        expect(tree).toMatchSnapshot()
    })
 } )