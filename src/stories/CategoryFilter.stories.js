import React from 'react';

import CategoryFilter from '../components/CategoryFilter';

export default {
  title: 'Eventplanner/CategoryFilter',
  component: CategoryFilter,
  argTypes: {
    },
};

const Template = (args) => <CategoryFilter  {...args} />;

export const CategoryButtons  = Template.bind({});
CategoryButtons.args = {
  
};

