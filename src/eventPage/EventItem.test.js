import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import EventItem from './EventItem'
import 'jest-styled-components'

describe('EventItem', () => {
    const name = 'This is the eventname'
    const location = 'This is the eventlocation'
    const date = 'This is the eventdate'



    it('display the eventname and eventlocation', () => {
        const { getByText } = render(<EventItem event={{eventName: name, eventLocation: location, eventDate: date}} />)
        expect(getByText(name + ' - ' + location)).toBeInTheDocument()
        expect(getByText(date)).toBeInTheDocument()
    })
    it('renders correctly', () => {
        const tree = renderer.create(<EventItem event={{eventName: name, eventLocation: location, eventDate: date}}/>)
        expect(tree).toMatchSnapshot()
    })
 } )