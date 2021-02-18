import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="navbar-items">
      <Link className="write-review-logged-in" to="/">
        Write a Review
      </Link>
      <div className="user-dropdown">
        <div className="user-icon">{`${currentUser.firstName} ${currentUser.lastName}`}</div>
        <div className="dropdown-content" onClick={logout}>
          Log Out
        </div>
      </div>
    </div>
  ) : (
    <div className="navbar-items">
      <Link className="login-btn" to="/login">
        Log In
      </Link>
      <Link className="signup-btn" to="/signup">
        Sign Up
      </Link>
    </div>
  )
  return (
    <header className="nav-bar">
      <a className="logo" href="/">
        <img src={window.logoUrl} />
      </a>
      <div>{display}</div>
    </header>
  )
}

export default NavBar
