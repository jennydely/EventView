export function getOldYearsOfEvents(filteredEvents) {
  const availableYears = filteredEvents.reduce((years, event) => {
    const eventYear = event.eventStartDate.slice(0, 4)
    if (!years.includes(eventYear) && eventYear) years.push(eventYear)
    return years
  }, [])
  return availableYears
}
