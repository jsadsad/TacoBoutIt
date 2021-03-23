import React from 'react'
import SearchBar from '../search_bar/search_bar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons'

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="navbar-items">
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
      <div className="nav-bar-left">
        <a href="" target="_blank">
          {' '}
          <FontAwesomeIcon
            className="navbar-GH"
            icon={faGithub}
            transform="left-4"
          />
        </a>
        <a href="" target="_blank">
          {' '}
          <FontAwesomeIcon
            className="navbar-LN"
            icon={faLinkedin}
            transform="left-4"
          />
        </a>
        <a href="" target="_blank">
          {' '}
          <FontAwesomeIcon
            className="navbar-LN"
            icon={faAngellist}
            transform="left-4"
          />
        </a>
        <Link to="/businesses">All Businesses</Link>
      </div>

      <div className="search-bar-nav">
        <SearchBar />
      </div>

      <div>{display}</div>
    </header>
  )
}

export default NavBar
