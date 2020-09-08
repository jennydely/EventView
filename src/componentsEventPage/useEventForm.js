import { useState } from 'react'

export default function useEventForm(addEvent) {
  const [eventFormIsVisible, setEventFormIsVisible] = useState(false)

  const showEventForm = () => setEventFormIsVisible(true)

  const onEventSave = (event) => {
    addEvent(event)
    setEventFormIsVisible(false)
  }

  const goEventBack = () => window.location.reload() && setEventFormIsVisible(false) 

  return { eventFormIsVisible, showEventForm, onEventSave, goEventBack }
}
