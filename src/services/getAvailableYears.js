import { getYearsOfEvents } from '../services/getYearsOfEvents'
import { getOldYearsOfEvents } from '../services/getOldYearsOfEvents'

export function getAvailableYears(eventFilter, filteredEvents) {
  const availableYears =
    eventFilter === 'Old'
      ? getOldYearsOfEvents(filteredEvents)
      : getYearsOfEvents(filteredEvents)

  return availableYears
}
