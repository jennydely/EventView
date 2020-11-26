import React from 'react'
import UserPage from '../Pages/EventList/UserPage'
import './storybookStyles.css'

export default {
  title: 'EventView/UserPage',
  component: UserPage,
}

const Template = (args) => (
  <main className="storybook_main">
    <UserPage {...args} />
  </main>
)

export const MainPage = Template.bind({})
MainPage.args = {}
