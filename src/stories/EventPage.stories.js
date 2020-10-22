import React from 'react'
import UserEventPage from '../Pages/EventMain/UserEventPage'
import './storybookStyles.css'

export default {
  title: 'EventView/UserEventPage',
  component: UserEventPage,
}

const Template = (args) => (
  <main className="storybook_main">
    <UserEventPage {...args} />
  </main>
)

export const MainPage = Template.bind({})
MainPage.args = {}
