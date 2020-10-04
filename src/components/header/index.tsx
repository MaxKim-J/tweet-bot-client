import React from 'react'
import './_header.scss'
import {Link} from "react-router-dom";


function Header() {
  return (
    <header>
      <Link to={'/'}>
        <div className="header-title">판례요지봇</div>
      </Link>
    </header>
  )
}

export default Header
