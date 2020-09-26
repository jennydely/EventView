import React from 'react'
import PacklistForm from '../Pages/PacklistForm/PacklistForm'

export default {
  title: 'EventView/PacklistForm',
  component: PacklistForm,
}

const Template = (args) => <PacklistForm {...args} />

export const Formular = Template.bind({})
Formular.args = {}
