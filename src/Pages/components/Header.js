import React from 'react'
import SelectEvents from './common/SelectEvents'
import CategoryFilter from './CategoryFilter'

export default function Header({
  onSelectFilter,
  onSelectEventFilter,
  eventArray,
}) {
  const hasHiddenEvent = eventArray.some((event) => event.isHidden === true)
  const hasOldEvent = eventArray.some(
    (event) => event.eventEndDate < new Date().toJSON().slice(0, 10)
  )
  const sortOptions = ['date', 'a-Z', 'Z-a']
  if (hasHiddenEvent) sortOptions.push('Hidden')
  if (hasOldEvent) sortOptions.push('Old')

  return (
    <header>
      <SelectEvents
        id="filter"
        name={sortOptions}
        options={sortOptions}
        onSelectEventFilter={onSelectEventFilter}
      />
      <CategoryFilter onSelectFilter={onSelectFilter} />
    </header>
  )
}
