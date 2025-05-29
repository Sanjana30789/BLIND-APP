import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-heading">
        <img src="/images/blind3.png" alt="Assistive Companion Logo" className="logo" />
        <h1>Assistive Companion</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#developers">Developers</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
