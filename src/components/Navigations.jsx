import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigations = () => {
  return (
    <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
        <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
    </nav>
  )
}

export default Navigations