import { useState } from 'react'

export default function useEventForm(addEvent) {
  const [formIsVisible, setFormIsVisible] = useState(false)

  const showForm = () => setFormIsVisible(true)

  const onSave = (event) => {
    addEvent(event)
    setFormIsVisible(false)
  }

  const goBack = () => window.location.reload() && setFormIsVisible(false) 

  return { formIsVisible, showForm, onSave, goBack }
}
