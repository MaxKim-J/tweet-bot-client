import React from 'react'
import RootRouter from './routes'
import Header from './components/header'
import Footer from './components/footer'
import './scss/initialize.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <RootRouter/>
      <Footer/>
    </div>
  )
}

export default App
