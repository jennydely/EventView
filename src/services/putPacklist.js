import { saveToLocal } from '../lib/localStorage'
import { getPacklists } from './getPacklists'

export function putPacklist(packlistUpdate) {
  return getPacklists()
    .then((packlists) => {
      const index = packlists.findIndex(
        (packlist) => packlist.id === packlistUpdate.id
      )
      return [
        ...packlists.slice(0, index),
        { ...packlistUpdate },
        ...packlists.slice(index + 1),
      ]
    })
    .then((packlists) => saveToLocal('packlists', packlists))
    .then(() => packlistUpdate)
}
