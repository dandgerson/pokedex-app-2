import React from 'react'
import cl from 'clsx'

import Header from 'components/Header'

import s from './App.m.scss'

const App = () => (
  <div className={cl(s.root)}>
    <Header />
  </div>
)

export default App
