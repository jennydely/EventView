import eventArray from '../mockDB/events.json'
import { v4 as uuid } from 'uuid'
import { loadFromLocal, saveToLocal } from './localStorage'

export function getEvents() {
  return loadFromLocal('events').catch(() => {
    return eventArray
  })
}

export function postEvent (eventArray) {
  const newEvent = { ...eventArray, _id: uuid() }
  return getEvents()
    .then((eventArray) => [newEvent, ...eventArray])
    .then((eventArray) => saveToLocal('eventArray', eventArray))
    .then(() => newEvent)
}
