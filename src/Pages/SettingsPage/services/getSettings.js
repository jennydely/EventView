import settings from '../../../mockDB/settings.json'
import { loadFromLocal } from '../../../lib/localStorage'

export function getSettings() {
  return loadFromLocal('settings').catch(() => {
    return settings
  })
}
