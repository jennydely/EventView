import React from 'react'
import Header from '../components/Header'

export default {
  title: 'EventView/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const EventHeader = Template.bind({})
EventHeader.args = {}
