import { useEffect, useState } from 'react'
import { getEvents } from '../services/getEvents'
import { postEvent } from '../services/postEvent'
import { putEvent } from '../services/putEvent'

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

  return { eventArray, addEvent, updateEvent, error }
}
