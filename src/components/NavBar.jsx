import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/login">Log In
    </Link>
  </div>
</nav>
      
    </div>
  )
}

export default NavBar


