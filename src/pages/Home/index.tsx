import React, { useState, useEffect } from 'react'
import cl from 'clsx'
import { useHistory } from 'react-router-dom'

// import bannerImg from 'images/BannerComplete.png'
import cloudBig from 'images/cloudBig.png'
import cloudSmall from 'images/cloudSmall.png'
import pikachu from 'images/Pikachu.png'
import pokeball1 from 'images/PokeBall1.png'
import pokeball2 from 'images/PokeBall2.png'

import Button from 'components/Button'

import s from './Home.m.scss'

const Home = () => {
  const history = useHistory()

  const [screenX, setSreenX] = useState(0)
  const [screenY, setSreenY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setSreenX(Math.abs(event.screenX))
      setSreenY(Math.abs(event.screenY))
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [screenX, screenY])

  return (
    <div className={cl(s.root)}>
      <div className={cl(s.cover)}>
        <div
          className={cl(
            'h1',
            s.title,
          )}>
          <span className={cl('bold')}>Find</span> all your favorite{' '}
          <span className={cl('bold')}>Pokemon</span>
        </div>

        <div className={cl('h2', s.title)}>
          You can know the type of Pokemon, its strengths, disadvantages and abilities
        </div>

        <Button handleClick={() => history.push('/pokedex')} text='See pokemons' />
      </div>

      <div
        className={cl(s.cloudBig)}
        style={{
          transform: `translate(${screenX * 0.003}%, ${screenY * 0.003}%)`,
        }}>
        <img src={cloudBig} alt='' />
      </div>

      <div
        className={cl(s.cloudSmall)}
        style={{
          transform: `translate(${screenX * 0.003}%, ${screenY * 0.003}%)`,
        }}>
        <img src={cloudSmall} alt='' />
      </div>

      <div
        className={cl(s.pikachu)}
        style={{
          transform: `translate(${screenX * -0.009}%, ${screenY * -0.01}%)`,
        }}>
        <img src={pikachu} alt='' />
      </div>

      <div
        className={cl(s.pokeball1)}
        style={{
          transform: `translate(${screenX * 0.003}%, ${screenY * 0.003}%)`,
        }}>
        <img src={pokeball1} alt='' />
      </div>

      <div
        className={cl(s.pokeball2)}
        style={{
          transform: `translateY(${screenY * -0.005}%)`,
        }}>
        <img src={pokeball2} alt='' />
      </div>
    </div>
  )
}

export default Home
