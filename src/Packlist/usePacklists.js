import { useEffect, useState } from 'react'
import { getPacklists } from '../services/getPacklists'
import { postPacklist } from '../services/postPacklist'
import { putPacklist } from '../services/putPacklist'

export default function usePacklists() {
  const [packlists, setPacklists] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getPacklists().then(setPacklists)
  }, [])

  const addPacklist = (packlist) => {
    postPacklist(packlist)
      .then((newPacklist) => setPacklists([newPacklist, ...packlists]))
      .catch(setError)
  }

  const updatePacklistCheckbox = (clickedPacklistItem) => {
    putPacklist(clickedPacklistItem)
      .then((packlistUpdate) => {
        const index = packlists.packlist.findIndex(
          (item) => item.itemID === packlistUpdate.id
        )
        return setPacklists([
          ...packlists.slice(0, index),
          { ...packlistUpdate },
          ...packlists.slice(index + 1),
        ])
      })
      .catch(setError)
  }

  return { packlists, addPacklist, updatePacklistCheckbox, error }
}
