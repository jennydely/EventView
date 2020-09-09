import { useEffect, useState } from 'react'
import { getPacklists } from '../services/getPacklists'
import { postPacklists } from '../services/postPacklists'

export default function usePacklists() {
  const [packlists, setPacklists] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getPacklists().then(setPacklists)
  }, [])

  const addPacklist = (packlist) => {
    postPacklists(packlist)
      .then((newPacklist) => setPacklists([newPacklist, ...packlists]))
      .catch(setError)
  }
  return { packlists, addPacklist, error }
}
