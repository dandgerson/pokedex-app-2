import React from 'react'
import cl from 'clsx'

import Button from 'components/Button'

import s from './Home.m.scss'

const Home = () => (
  <div className={cl(s.root)}>
    <div
      style={{
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '128px',
      }}>
      <div className={cl('h1')}>
        <span className={cl('bold')}>Find</span> all your favorite <div className={cl('bold')}>Pokemons</div>
      </div>

      <div
        className={cl('h3')}
        style={{
          marginTop: '32px',
        }}>
        You can know the type of Pokemon, its strengths, disadvantages and abilities
      </div>

      <Button text="See pokemons" handleClick={() => console.log('click!')} />
    </div>
    <div>image</div>
  </div>
)

export default Home
