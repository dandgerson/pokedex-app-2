import React from 'react'
import cl from 'clsx'

import s from './Button.m.scss'

interface ButtonProps {
  text: string
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Button: React.FC<ButtonProps> = ({ text, handleClick = () => {} }) => (
  <div className={cl(s.root)} onClick={handleClick}>
    {text}
  </div>
)

export default Button
