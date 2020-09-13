export function sortEvents(eventArray, eventFilter) {
  const events =
    eventFilter === 'a-Z'
      ? eventArray.sort((event1, event2) => event1.name > event2.name)
      : eventFilter === 'Z-a'
      ? eventArray.sort((event1, event2) => event1.name < event2.name)
      : eventArray.sort(
          (event1, event2) => event1.eventStartDate > event2.eventStartDate
        )
  return events
}
