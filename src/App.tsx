import React from 'react'
import RootRouter from './routes'
import Header from './components/header'
import Footer from './components/footer'
import './scss/_initialize.scss'
import './scss/_app.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <RootRouter/>
      </section>
      <Footer/>
    </div>
  )
}

export default App
