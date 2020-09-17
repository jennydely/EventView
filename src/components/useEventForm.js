import { useState } from 'react'

export default function useEventForm(addEvent, updateEvent) {
  const [eventFormIsVisible, setEventFormIsVisible] = useState(false)

  const showEventForm = () => {
    setEventFormIsVisible(true)
  }

  const onEventSave = (event) => {
    console.log('eventSave', event)
    addEvent(event)
    setEventFormIsVisible(false)
  }
  const onEventSaveEdit = (event) => {
    console.log('eventSaveEdit', event)
    const newEvent = JSON.parse(JSON.stringify(event))
    updateEvent(newEvent)
    setEventFormIsVisible(false)
  }
  const goEventBack = () =>
    window.location.reload() && setEventFormIsVisible(false)

  return {
    eventFormIsVisible,
    showEventForm,
    onEventSave,
    onEventSaveEdit,
    goEventBack,
  }
}
