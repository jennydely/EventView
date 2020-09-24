import packlists from '../../../mockDB/packlists.json'
import { loadFromLocal } from '../../../lib/localStorage'

export function getPacklists() {
  return loadFromLocal('packlists').catch(() => {
    return packlists
  })
}
