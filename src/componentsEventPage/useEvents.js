import { useEffect, useState } from 'react'
import { getEvents, postEvent } from '../utils/services'

export default function useEvents() {
  const [eventArray, setEventArray] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getEvents().then(setEventArray)
  }, [])

  const addEvent = (event) => {
    postEvent(event)
      .then((newEvent) => setEventArray([newEvent, ...eventArray]))
      .catch(setError)
  }

  return { eventArray, addEvent, error }
}
