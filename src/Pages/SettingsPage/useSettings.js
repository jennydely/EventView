import { useEffect, useState } from 'react'
import { getSettings } from './services/getSettings'
import { putSettings } from './services/putSettings'

export default function useSettings() {
  const [settings, setSettings] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getSettings().then(setSettings)
  }, [])

  const updateSettings = (settings) => {
    putSettings(settings)
      .then((settings) => {
        return setSettings(settings)
      })
      .catch(setError)
  }

  return {
    settings,
    updateSettings,
    error,
  }
}
