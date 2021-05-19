import React from 'react'
import cl from 'clsx'

import s from './Card.m.scss'

const Card = ({ data: { stats, types, img, name } }) => (
    <div className={cl(s.root)}>
      <div className={s.infoWrap}>
        <div className={cl('h3', s.titleName)}>{name}</div>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={cl(s.labelWrap)}>
          {types.map(type => (
            <span key={type} className={cl(s.label, s[`label-${type}`])}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  )

export default Card
