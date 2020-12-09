export function getFilteredEvents(
  eventArray,
  eventFilter,
  eventSearch,
  multipleEventSearch,
  categoryfilteredEvents
) {
  if (eventSearch === 'noEvent') return ['']
  else if (eventSearch && eventSearch.length > 0)
    return [eventArray.find((event) => event.name === eventSearch)]
  else if (multipleEventSearch && multipleEventSearch.length > 0)
    return eventArray.filter((event) =>
      event.name.toLowerCase().includes(multipleEventSearch.toLowerCase())
    )

  const today = new Date().toJSON().slice(0, 10)

  const filteredOldEvents = categoryfilteredEvents.filter(
    (event) => event.eventEndDate < today
  )
  const filteredNotHiddenEvents = categoryfilteredEvents.filter(
    (event) => event.isHidden !== true && event.eventEndDate >= today
  )
  const filteredHiddenEvents = categoryfilteredEvents.filter(
    (event) => event.isHidden === true
  )
  const filteredEvents =
    eventFilter === 'Hidden' && filteredHiddenEvents.length > 0
      ? filteredHiddenEvents
      : eventFilter === 'Old'
      ? filteredOldEvents
      : filteredNotHiddenEvents
  return filteredEvents
}
