import React from 'react'
import cl from 'clsx'
import SVG from 'react-inlinesvg'

import logo from 'images/Logo.svg'
import s from './Header.m.scss'

const Header = () => {
  const menu = ['Home', 'Pokédex', 'Legendaries', 'Documentation']

  return (
    <div className={cl(s.root)}>
      <div className={cl(s.logo)}>
        <SVG src={logo} />
      </div>

      <div className={cl(s.menu)}>
        {menu.map((menuItem) => (
          <div key={menuItem} className={cl(s.menu_item)}>
            {menuItem}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header
