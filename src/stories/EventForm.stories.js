import React from 'react'
import EventForm from '../components/EventForm'

export default {
  title: 'EventView/EventForm',
  component: EventForm,
}

const Template = (args) => (
  <main>
    <EventForm {...args} />
  </main>
)

export const Formular = Template.bind({})
Formular.args = {
  packlists: [{ name: 'medieval' }, { name: 'festival' }],
}
