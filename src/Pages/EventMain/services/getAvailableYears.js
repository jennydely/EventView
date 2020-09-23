import { getYearsOfEvents } from './getYearsOfEvents'
import { getOldYearsOfEvents } from './getOldYearsOfEvents'

export function getAvailableYears(eventFilter, filteredEvents) {
  const availableYears =
    eventFilter === 'Old'
      ? getOldYearsOfEvents(filteredEvents)
      : getYearsOfEvents(filteredEvents)

  return availableYears
}
