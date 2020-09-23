import { useState } from 'react'
import usePacklists from '../Packlist/usePacklists'

export default function usePacklistForm() {
  const [packlistFormIsVisible, setPacklistFormIsVisible] = useState(false)
  const { updatePacklist, addPacklist } = usePacklists()

  const showPacklistForm = () => setPacklistFormIsVisible(true)

  const onPacklistSave = (packlist) => {
    addPacklist(packlist)
    setPacklistFormIsVisible(false)
  }
  const onPacklistSaveEdit = (packlist) => {
    updatePacklist(packlist)
    return true
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
