export function sortEvents(eventArray, eventFilter) {
  const events =
    eventFilter === 'A-z'
      ? eventArray.slice().sort((event1, event2) => event1.name > event2.name)
      : eventFilter === 'Z-a'
      ? eventArray.slice().sort((event1, event2) => event1.name < event2.name)
      : eventArray
          .slice()
          .sort(
            (event1, event2) => event1.eventStartDate > event2.eventStartDate
          )
  return events
}
