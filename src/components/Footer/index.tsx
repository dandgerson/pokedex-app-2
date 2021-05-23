import React from 'react'
import cl from 'clsx'

import s from './Footer.m.scss'

const Footer = () => {
  const items = ['Make with ❤️', 'Ours Team']

  return (
    <div
      className={cl(
        s.root,
      )}>
      {items.map(item => (
        <div key={item} className={cl(s.item)}>
          {item}
        </div>
      ))}
    </div>
  )
}

Footer.propTypes = {}

export default Footer
