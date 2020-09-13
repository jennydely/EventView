import { saveToLocal } from '../lib/localStorage'
import { getEvents } from './getEvents'

export function putEvent(eventUpdate) {
  return getEvents()
    .then((eventArray) => {
      const index = eventArray.findIndex((event) => event.id === eventUpdate.id)
      return [
        ...eventArray.slice(0, index),
        { ...eventUpdate },
        ...eventArray.slice(index + 1),
      ]
    })
    .then((eventArray) => saveToLocal('eventArray', eventArray))
    .then(() => eventUpdate)
}
