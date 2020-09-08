import eventArray from '../mockDB/events.json'
import packlists from '../mockDB/packlists.json'
import { v4 as uuid } from 'uuid'
import { loadFromLocal, saveToLocal } from './localStorage'

export function getEvents() {
  return loadFromLocal('eventArray').catch(() => {
    return eventArray
  })
}

export function postEvent (eventArray) {
  const newEvent = { ...eventArray, id: uuid() }
  return getEvents()
    .then((eventArray) => [newEvent, ...eventArray])
    .then((eventArray) => saveToLocal('eventArray', eventArray))
    .then(() => newEvent)
}

export function getPacklists() {
  return loadFromLocal('packlists').catch(() => {
       return packlists
  })
}

export function postPacklists (packlists) {
  const newPacklist = { ...packlists, id: uuid() }
  return getPacklists()
    .then((packlists) => [newPacklist, ...packlists])
    .then((packlists) => saveToLocal('packlists', packlists))
    .then(() => newPacklist)
}
