import React from 'react'

import CategoryFilter from '../Pages/components/CategoryFilter'

export default {
  title: 'EventView/CategoryFilter',
  component: CategoryFilter,
  argTypes: {},
}

const Template = (args) => <CategoryFilter {...args} />

export const CategoryButtons = Template.bind({})
CategoryButtons.args = {}
