import { getYearsOfEvents } from './getYearsOfEvents'
import { getOldYearsOfEvents } from './getOldYearsOfEvents'

export function getAvailableYears(eventFilter, filteredEventList) {
  const availableYears =
    eventFilter === 'Old'
      ? getOldYearsOfEvents(filteredEventList)
      : getYearsOfEvents(filteredEventList)

  return availableYears
}
