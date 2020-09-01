import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import EventItem from './EventItem'
import 'jest-styled-components'

describe('EventItem', () => {
    const name = 'This is the eventname'
    const location = 'This is the eventlocation'
    const inputStartDate = '2020-06-25'
    const inputEndDate = '2020-06-28'
    const outputStartDate = '06/25/2020'
    const outputEndDate = '06/28/2020'


    it('displays the eventname and eventlocation', () => {
        const { getByText } = render(<EventItem event={{ name, location, startDate: inputStartDate, endDate: inputEndDate }} />)
        setTimeout(() => {
            expect(getByText(name + ' - ' + location)).toBeInTheDocument()
            expect(getByText(outputStartDate + '-' + outputEndDate)).toBeInTheDocument()
        }, 100)
    })
    it('renders correctly', () => {
        const tree = renderer.create(<EventItem event={{ name, location, startDate: inputStartDate, endDate: inputEndDate }} />)
        expect(tree).toMatchSnapshot()
    })
})