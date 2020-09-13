import { getYearsOfEvents } from './getYearsOfEvents'

export function getFilteredEvents(
  eventArray,
  eventFilter,
  categoryfilteredEvents
) {
  const oldEvents = eventArray.filter(
    (event) =>
      event.eventStartDate.slice(0, 4) < getYearsOfEvents(eventArray)[0]
  )
  const filteredNotHiddenEvents = categoryfilteredEvents.filter(
    (event) => event.isHide !== true
  )
  const filteredHiddenEvents = categoryfilteredEvents.filter(
    (event) => event.isHide === true
  )
  const filteredEvents =
    eventFilter === 'Hidden'
      ? filteredHiddenEvents
      : eventFilter === 'Old'
      ? oldEvents
      : filteredNotHiddenEvents
  return filteredEvents
}
