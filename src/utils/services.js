import events from '../mockDB/events.json'
import { v4 as uuid } from 'uuid'
import { loadFromLocal, saveToLocal } from './localStorage'

export function getEvents() {
  return loadFromLocal('events').catch(() => {
    return events
  })
}

export function postEvents(event) {
  const newEvent = { ...event, _id: uuid() }
  return getEvents()
    .then((events) => [newEvent, ...events])
    .then((events) => saveToLocal('events', events))
    .then(() => newEvent)
}
