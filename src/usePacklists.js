import { useEffect, useState } from 'react'
import { getPacklists, postPacklists } from './utils/services'

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
  console.log(packlists)
  return { packlists, addPacklist, error }
}
