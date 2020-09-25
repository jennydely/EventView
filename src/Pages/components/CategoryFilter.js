import React from 'react'
import SelectCategory from './common/SelectCategory'

export default function CategoryFilter({ onSelectFilter }) {
  const categories = ['all', 'metal', 'medieval', 'holiday', 'other']

  return (
    <SelectCategory
      data-testid="my-select-component"
      id="category"
      placeholder="all"
      name={categories}
      options={categories}
      onSelectFilter={onSelectFilter}
    />
  )
}
