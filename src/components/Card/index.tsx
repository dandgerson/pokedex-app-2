/* eslint-disable camelcase */
import React from 'react'
import cl from 'clsx'
import { useHistory, useLocation } from 'react-router-dom'

import s from './Card.m.scss'

export interface IPokemon {
  id: number
  name: string
  color: string
  stats: {
    base_stat: string
  }[]
  types: {
    type: {
      name: string
    }
  }[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

const Card = ({ data }: { data: IPokemon }) => {
  const history = useHistory()
  const location = useLocation()

  return (
    <div className={cl(s.root)} onClick={() => history.push(`${location.pathname}/${data.id}`)}>
      <div className={s.infoWrap}>
        <div className={cl('h3', s.titleName)}>{data.name}</div>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{data.stats[1].base_stat}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{data.stats[2].base_stat}</div>
            Defense
          </div>
        </div>
        <div className={cl(s.labelWrap)}>
          {data.types.map(slot => (
            <span key={slot.type.name} className={cl(s.label, s[`label-${slot.type.name}` as keyof typeof s])}>
              {slot.type.name}
            </span>
          ))}
        </div>
      </div>
      <div
        className={s.pictureWrap}
        style={{
          background: `linear-gradient(270deg, ${data.color} 15%, transparent 100%)`,
        }}>
        <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
      </div>
    </div>
  )
}

export default Card
