import { useEffect, useState } from 'react'

import PokeApiHandler from 'api/pokeApiHandler'
import { IPokemon } from 'components/Card'

const pokeApiHandler = new PokeApiHandler()

interface IError {
  message: string
}

export interface IData {
  pokemons: IPokemon[]
  total: number
}

const useData = (): [{
  data: IData | null,
  isLoading: boolean | null,
  error: IError | null,
}, ({
  endpoint,
  query,
  uriSuffix,
}: {
  endpoint?: string
  query?: { nameOrId: string } | null
  uriSuffix?: string
}) => void] => {
  const [data, setData] = useState<null | IData>(null)

  const [endpoint, setEndpoint] = useState<string>('')
  const [query, setQuery] = useState<null | { nameOrId?: string } | {}>({})
  const [uriSuffix, setUriSuffix] = useState('')

  const [isLoading, setIsLoading] = useState<null | boolean>(null)
  const [error, setError] = useState<null | IError>(null)

  const doFetch = ({
    endpoint: currentEndpoint = '',
    query: currentQuery = null,
    uriSuffix: currentUriSuffix = '',
  }) => {
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
