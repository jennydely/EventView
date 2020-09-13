import { saveToLocal } from '../lib/localStorage'
import { getEvents } from './getEvents'

export function deleteEvent(eventDel) {
  return getEvents()
    .then((eventArray) => {
      const index = eventArray.findIndex((event) => event.id === eventDel.id)
      return [...eventArray.slice(0, index), ...eventArray.slice(index + 1)]
    })
    .then((eventArray) => saveToLocal('eventArray', eventArray))
    .then(() => eventDel)
}
