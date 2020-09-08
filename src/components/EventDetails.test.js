import React from 'react'
import { render} from '@testing-library/react'
import renderer from 'react-test-renderer'
import EventDetails from './EventDetails'
import 'jest-styled-components'

describe('EventDetails', () => {
    const event = {
        "id": "7",
        "poster": "https://www.wacken-winter-nights.com/fileadmin/_processed_/csm_wwn_20_191024-web_6495c0af7f.jpg",
        "name": "WackenWinterNights",
        "street": "Reselithweg 17",
        "zip": "25596",
        "location": "Wacken",
        "price": "99",
        "ticketBought": false,
        "website": "https://www.wacken-winter-nights.com/",
        "eventStartDate": "2021-02-14",
        "eventEndDate": "2021-02-16",
        "category": "metal"
    }

    it('displays the eventdetails, like name, location & price', () => {
        const { getByText, getByRole, getAllByTitle } = render(<EventDetails event={event} />)
            
        expect(getByText(event.name)).toBeInTheDocument()
        expect(getByText(event.zip + ' ' + event.location)).toBeInTheDocument()
        expect(getByText(event.street)).toBeInTheDocument()
        expect(getByText(event.price + ' €')).toBeInTheDocument()
        //expect(getByRole('button')).toBeInTheDocument()
        expect(getAllByTitle('link')).toHaveLength(2)
        expect(getByRole('checkbox', { checked: false })).toBeInTheDocument()

    })
    it('renders correctly', () => {
        const tree = renderer.create(<EventDetails event={event} />)
        expect(tree).toMatchSnapshot()
    })
})