import React from 'react'
import cl from 'clsx'

import Home from 'pages/Home'
import Header from 'components/Header'

import s from './App.m.scss'

const App = () => (
  <div className={cl(s.root)}>
    <Header />

    <Home />
  </div>
)

export default App
