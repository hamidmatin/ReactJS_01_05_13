import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>React Case Study</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="tutorials">Tutorials</NavLink></li>
          <li><NavLink to="calculator">Calculator</NavLink></li>
         
        </ul>
      </nav>
    </div>
  )
}

export default Header