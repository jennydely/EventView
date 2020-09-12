import { v4 as uuid } from 'uuid'
import { saveToLocal } from '../lib/localStorage'
import { getEvents } from './getEvents'

export function postEvent(event) {
  const newEvent = { ...event, id: uuid() }
  return getEvents()
    .then((eventArray) => [newEvent, ...eventArray])
    .then((eventArray) => saveToLocal('eventArray', eventArray))
    .then(() => newEvent)
}
