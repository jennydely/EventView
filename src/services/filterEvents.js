export function filterEvents(events, categoryFilter) {
  const filteredEvents = events.filter((event) =>
    categoryFilter === ''
      ? categoryFilter === 'all'
      : categoryFilter === 'all' || event.category === categoryFilter
  )
  return filteredEvents
}
