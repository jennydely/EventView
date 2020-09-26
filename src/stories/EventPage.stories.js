import React from 'react'
import EventPage from '../Pages/EventMain/EventPage'
import './storybookStyles.css'

export default {
  title: 'EventView/EventPage',
  component: EventPage,
}

const Template = (args) => (
  <main className="storybook_main">
    <EventPage {...args} />
  </main>
)

export const MainPage = Template.bind({})
MainPage.args = {}
