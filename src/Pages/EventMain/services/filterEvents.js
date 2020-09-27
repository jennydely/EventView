export function filterEvents(events, categoryFilter) {
  const filteredEvents = events.filter((event) =>
    categoryFilter === ''
      ? true
      : categoryFilter === 'All' ||
        categoryFilter === 'Category' ||
        event.category === categoryFilter
  )
  return filteredEvents
}
