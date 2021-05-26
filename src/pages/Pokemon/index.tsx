import React, { useEffect } from 'react'
import cl from 'clsx'
import { useParams } from 'react-router-dom'

import useData from 'hooks/useData'

import Card from 'components/Card'
import s from './Pokemon.m.scss'

const Pokemon: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [{ data }, doFetch] = useData()

  useEffect(() => {
    doFetch({
      endpoint: 'getPokemonByNameOrId',
      query: {
        nameOrId: id,
      },
      // uriSuffix: id,
    })
  }, [id])

  return (
    <div className={cl(s.root)}>
      {data !== null && data.pokemons.length > 0
        ? <Card data={data.pokemons?.[0]} />
        : <div>Is Loading...</div>}
    </div>
  )
}

export default Pokemon
