import { useEffect, useState } from 'react'
import { projectFirestore, projectStorage } from '../firebase/config'

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  //  realtime data from document
  useEffect(() => {
    const ref = projectStorage.collection(collection).doc(id)

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        setDocument({ ...snapshot.data(), id: snapshot.id })
        setError(null)
      },
      (error) => {
        console.log(error.message)
        setError('failed to get document')
      }
    )

    return () => {
      unsubscribe()
    }
  }, [collection, id])

  return { document, error }
}
