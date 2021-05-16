import React from 'react'
import cl from 'clsx'

import s from './Button.m.scss'

const Button = ({ text = '' }) => <div className={cl(s.root)}>{text}</div>

export default Button
