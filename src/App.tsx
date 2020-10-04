import React from 'react'
import RootRouter from './routes'

import './scss/_initialize.scss'
import './scss/_app.scss'
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <section>
        <RootRouter/>
      </section>
      <Footer/>
    </div>
  )
}

export default App
