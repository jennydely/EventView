import { useState } from 'react'

export default function usePacklistForm(addPacklist) {
  const [packlistFormIsVisible, setPacklistFormIsVisible] = useState(false)

  const showPacklistForm = () => setPacklistFormIsVisible(true)

  const onPacklistSave = (packlist) => {
    addPacklist(packlist)
    setPacklistFormIsVisible(false)
  }

  const onPacklistSaveEdit = (packlist) => {
    addPacklist(packlist)
    setPacklistFormIsVisible(false)
  }
  const goPacklistBack = () =>
    window.location.reload() && setPacklistFormIsVisible(false)

  return {
    packlistFormIsVisible,
    showPacklistForm,
    onPacklistSave,
    goPacklistBack,
    onPacklistSaveEdit,
  }
}
