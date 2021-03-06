import request from 'utils/request'
import React from 'react'

import { IData } from 'hooks/useData'

class PokeApiHandler {
  getUriSuffix = (uri: string): string => uri.slice(-1) === '/'
    ? uri.split('/').slice(-2)[0]
    : uri.split('/').slice(-1)[0]

  getPokemons = async ({ setData }: {
    setData?: React.Dispatch<React.SetStateAction<IData | null>>,
    query?: {
      nameOrId: string
    },
    uriSuffix?: string,
  }) => {
    const pokemonsRes = await request({ endpoint: 'getPokemons' })

    Promise.all(
      pokemonsRes.data.results.map(async ({ url }: { url: string }) => {
        const pokemonRes = await this.getPokemonByNameOrId({
          // uriSuffix: this.getUriSuffix(url),
          query: {
            nameOrId: this.getUriSuffix(url),
          },
        })

        const speciesRes = await this.getPokemonSpecies({
          // uriSuffix: this.getUriSuffix(pokemonRes.data.species.url),
          query: {
            nameOrId: this.getUriSuffix(pokemonRes?.data.species.url),
          },
        })

        return {
          ...pokemonRes?.data,
          color: speciesRes?.data.color.name,
        }
      }),
    ).then(result =>
      setData?.({
        total: pokemonsRes.data.count,
        pokemons: result,
      }),
    )
  }

  getPokemonByNameOrId = async ({
    setData,
    query,
  }: {
    setData?: React.Dispatch<React.SetStateAction<IData | null>>,
    query?: {
      nameOrId: string
    },
    uriSuffix?: string,
  }) => {
    const pokemonRes = await request({
      endpoint: 'getPokemonByNameOrId',
      query,
    })

    if (!setData) return pokemonRes

    const speciesRes = await this.getPokemonSpecies({
      query: {
        nameOrId: this.getUriSuffix(pokemonRes.data.species.url),
      },
    })

    setData({
      pokemons: [
        {
          ...pokemonRes.data,
          color: speciesRes?.data.color.name,
        },
      ],
    })

    return undefined
  }

  getPokemonSpecies = async ({
    setData,
    query,
  }: {
    setData?: React.Dispatch<React.SetStateAction<IData | null>>,
    query?: {
      nameOrId: string
    },
    uriSuffix?: string,
  }) => {
    const response = await request({
      endpoint: 'getPokemonSpecies',
      query,
    })

    if (!setData) return response

    setData({ pokemonSpecies: response.data })

    return undefined
  }
}

export default PokeApiHandler
