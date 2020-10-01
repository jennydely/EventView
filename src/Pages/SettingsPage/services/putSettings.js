import { saveToLocal } from '../../../lib/localStorage'

export function putSettings(settingsUpdate) {
  return saveToLocal('settings', settingsUpdate).then(() => settingsUpdate)
}
