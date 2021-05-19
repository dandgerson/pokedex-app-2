import React from 'react'
import cl from 'clsx'
import SVG from 'react-inlinesvg'

import ellipse from 'images/ellipse.svg'

import Dropdown from 'components/Dropdown'
import Card from './Card'

import s from './Pokedex.m.scss'

import pokemons from './pokemons'

const Pokedex = () => (
    <div className={cl(s.root)}>
      <div className={cl(s.layout)}>
        <div className={cl(s.header)}>
          800 <span className={cl('bold')}>Pokemons</span> for you to choose your favorite
        </div>

        <form className={cl(s.search)}>
          <input type='text' placeholder='Encuentra tu pokémon...' />
        </form>

        <div className={cl(s.filters)}>
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>

        <div className={cl(s.cards)}>
          {pokemons.map(pokemon => (
            <Card key={pokemon.id} data={pokemon} />
          ))}
        </div>

        <div className={cl(s.loader)}>
          {Array.from({ length: 3 }, (_, i) => i).map(v => (
            <SVG key={v} src={ellipse} width={8} />
          ))}
        </div>
      </div>
    </div>
  )

export default Pokedex
