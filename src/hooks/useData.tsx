import { useEffect, useState } from 'react'

import PokeApiHandler from 'api/pokeApiHandler'

const pokeApiHandler = new PokeApiHandler()

interface IError {
  message: string
}

const useData = () => {
  const [data, setData] = useState(null)

  const [endpoint, setEndpoint] = useState('')
  const [query, setQuery] = useState(null)
  const [uriSuffix, setUriSuffix] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<null | IError>(null)

  const doFetch = ({
    endpoint: currentEndpoint = '',
    query: currentQuery = null,
    uriSuffix: currentUriSuffix = '',
  } = {}) => {
    currentEndpoint && setEndpoint(currentEndpoint)
    currentQuery && setQuery(currentQuery)
    currentUriSuffix && setUriSuffix(currentUriSuffix)
    setIsLoading(true)
  }

  useEffect(() => {
    const getData = () => {
      try {
        pokeApiHandler[endpoint as keyof typeof pokeApiHandler]({
          setData,
          query,
          uriSuffix,
        })
      } catch (err) {
        setError({
          message: err.message,
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (isLoading) {
      getData()
    }
  }, [endpoint, isLoading, query, uriSuffix])

  return [{ data, isLoading, error }, doFetch]
}

export default useData
