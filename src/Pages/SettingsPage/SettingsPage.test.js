import React from 'react'
import { render, fireEvent, getByRole } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import 'jest-styled-components'
import SettingsPage from './SettingsPage'



describe('SettingsPage', () => {
    it('displays a form to create events', async () => {

        const { getByTestId } = render(
            <MemoryRouter>
                <SettingsPage />
            </MemoryRouter>

        )
        const themeSelect = getByTestId('theme')
        expect(themeSelect.value).toBe('black')
        fireEvent.select(themeSelect, { target: { value: 'grey' } })
        expect(themeSelect.value).toBe('grey')
    })

    it('renders correctly', () => {
        const tree = render(

            <MemoryRouter>
                <SettingsPage />
            </MemoryRouter>

        )
        expect(tree).toMatchSnapshot()
    })
})
