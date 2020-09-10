import eventArray from '../mockDB/events.json'
import { loadFromLocal } from '../lib/localStorage'

export function getEvents() {
  return loadFromLocal('eventArray').catch(() => {
    return eventArray
  })
}
