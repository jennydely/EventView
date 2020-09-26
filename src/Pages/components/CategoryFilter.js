import React from 'react'
import SelectCategory from './common/SelectCategory'

export default function CategoryFilter({ onSelectFilter }) {
  const categories = [
    'category',
    'all',
    'metal',
    'medieval',
    'holiday',
    'other',
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
