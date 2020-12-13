export function getOldYearsOfEvents(filteredEventList) {
  const availableYears = filteredEventList.reduce((years, event) => {
    const eventYear = event.eventStartDate.slice(0, 4)
    if (!years.includes(eventYear) && eventYear) years.push(eventYear)
    return years
  }, [])
  return availableYears
}
