import React from 'react'
import RootRouter from './routes'
import Header from './components/header'
import './scss/initialize.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <RootRouter/>
    </div>
  )
}

export default App
