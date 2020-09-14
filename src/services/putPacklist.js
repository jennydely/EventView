import { saveToLocal } from '../lib/localStorage'
import { getPacklists } from './getPacklists'

export function putPacklist(packlistUpdate) {
  return getPacklists()
    .then((packlists) => {
      const index = packlists.packlist.findIndex(
        (item) => item.itemID === packlistUpdate.id
      )
      return [
        ...packlists.packlist.slice(0, index),
        { ...packlistUpdate },
        ...packlists.packlist.slice(index + 1),
      ]
    })
    .then((packlists) => saveToLocal('packlist', packlists.packlist))
    .then(() => packlistUpdate)
}
