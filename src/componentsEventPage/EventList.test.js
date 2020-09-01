import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import EventList from './EventList'
import 'jest-styled-components'

describe('EventList', () => {
    const eventArray = [{
        "id": "123",
        "name": "this is the eventname",
        "location": "this is the eventlocation",
        "startDate": "06/25/2020",
        "endDate": "06/28/2020",
        "category": "medieval"
    },
    {
        "id": "321",
        "name": "this is the eventname",
        "nocation": "this is the eventlocation",
        "startDate": "06/25/2021",
        "endDate": "06/28/2021",

        "category": "medieval"
    }
]
    const categoryFilter = 'medieval'

    it('display the year and an example event', () => {
        const { getByText } = render(<EventList eventArray={eventArray} categoryFilter={categoryFilter} />)
        setTimeout(() => {
            expect(getByText(eventArray[0].eventName)).toBeInTheDocument()
            expect(getByText(eventArray[0].eventLocation)).toBeInTheDocument()
        }, 100)
    })
    it('renders correctly', () => {
        const tree = renderer.create(<EventList eventArray={eventArray} categoryFilter={categoryFilter} />)
        expect(tree).toMatchSnapshot()
    })
})