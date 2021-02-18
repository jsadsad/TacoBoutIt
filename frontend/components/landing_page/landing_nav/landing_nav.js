import React from 'react'
import { Link } from 'react-router-dom'

const LandingNav = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="user-dropdown">
      <div className="user-icon">{`${currentUser.firstName} ${currentUser.lastName}`}</div>
      <div className="landing-dropdown-content" onClick={logout}>
        Log Out
      </div>
    </div>
  ) : (
    <div className="landing-nav-right">
      <Link className="landing-page-login" to="/login">
        Log In
      </Link>
      <Link className="landing_nav_signup" to="/signup">
        Sign Up
      </Link>
    </div>
  )

  return (
    <div className="landing-top-nav">
      <div className="landing-nav-left">
        <Link className="landing-page-business" to="/businesses">
          Businesses
        </Link>
      </div>
      {display}
    </div>
  )
}

export default LandingNav
