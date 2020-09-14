import { useEffect, useState } from 'react'
import { getEvents } from '../services/getEvents'
import { postEvent } from '../services/postEvent'
import { putEvent } from '../services/putEvent'
import { deleteEvent } from '../services/deleteEvent'

export default function useEvents() {
  const [eventArray, setEventArray] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getEvents().then(setEventArray)
  }, [])

  const addEvent = (eventItem) => {
    postEvent(eventItem)
      .then((newEvent) => setEventArray([newEvent, ...eventArray]))
      .catch(setError)
  }

  const updateEvent = (eventItem) => {
    putEvent(eventItem)
      .then((eventUpdate) => {
        const index = eventArray.findIndex(
          (event) => event.id === eventUpdate.id
        )
        return setEventArray([
          ...eventArray.slice(0, index),
          { ...eventUpdate },
          ...eventArray.slice(index + 1),
        ])
      })
      .catch(setError)
  }

  const updateTicketCheckbox = (eventClickedCheckbox) => {
    putEvent(eventClickedCheckbox)
      .then((eventUpdate) => {
        const index = eventArray.findIndex(
          (event) => event.id === eventUpdate.id
        )
        return setEventArray([
          ...eventArray.slice(0, index),
          { ...eventUpdate },
          ...eventArray.slice(index + 1),
        ])
      })
      .catch(setError)
  }

  const removeEvent = (eventItem) => {
    deleteEvent(eventItem)
      .then((eventDel) => {
        const index = eventArray.findIndex((event) => event.id === eventDel.id)
        return setEventArray([
          ...eventArray.slice(0, index),
          ...eventArray.slice(index + 1),
        ])
      })
      .catch(setError)
  }

  return {
    eventArray,
    addEvent,
    updateEvent,
    updateTicketCheckbox,
    removeEvent,
    error,
  }
}
