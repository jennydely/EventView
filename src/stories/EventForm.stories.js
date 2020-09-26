import React from 'react'
import EventForm from '../Pages/EventForm/EventForm'
import './storybookStyles.css'

export default {
  title: 'EventView/EventForm',
  component: EventForm,
}

const Template = (args) => (
  <main className="storybook_main">
    <EventForm {...args} />
  </main>
)

export const Formular = Template.bind({})
Formular.args = {
  packlists: [{ name: 'medieval' }, { name: 'festival' }],
}
