export function getYearsOfEvents(filteredEventList) {
  const currentYearString = new Date().getFullYear().toString()
  const availableYears = filteredEventList.reduce(
    (years, event) => {
      const eventYear = event.eventStartDate.slice(0, 4)
      if (!years.includes(eventYear) && eventYear >= currentYearString)
        years.push(eventYear)
      return years
    },
    []
  )
  return availableYears
}
