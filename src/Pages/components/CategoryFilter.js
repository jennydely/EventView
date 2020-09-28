import React from 'react'
import SelectCategory from './common/SelectCategory'

export default function CategoryFilter({ onSelectFilter }) {
  const categories = [
    'Category',
    'All',
    'Metal',
    'Medieval',
    'Holiday',
    'Other',
  ]

  return (
    <SelectCategory
      data-testid="my-select-component"
      id="category"
      placeholder="category"
      name={categories}
      options={categories}
      onSelectFilter={onSelectFilter}
    />
  )
}
