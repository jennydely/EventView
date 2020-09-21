// import { getYearsOfEvents } from './getYearsOfEvents'

export function getFilteredEvents(
  eventArray,
  eventFilter,
  categoryfilteredEvents
) {
  const today = new Date().toJSON().slice(0, 10)

  const oldEvents = eventArray.filter((event) => event.eventEndDate < today)
  const filteredNotHiddenEvents = categoryfilteredEvents.filter(
    (event) => event.isHidden !== true && event.eventEndDate >= today
  )
  const filteredHiddenEvents = categoryfilteredEvents.filter(
    (event) => event.isHidden === true
  )
  const filteredEvents =
    eventFilter === 'Hidden'
      ? filteredHiddenEvents
      : eventFilter === 'Old'
      ? oldEvents
      : filteredNotHiddenEvents
  return filteredEvents
}
