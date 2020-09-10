import { useEffect, useState } from 'react'
import { getEvents } from '../services/getEvents'
import { postEvent } from '../services/postEvent'

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

  return { eventArray, addEvent, error }
}
