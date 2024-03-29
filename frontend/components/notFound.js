import React from 'react'
import NavBarContainer from './navbar/NavbarContainer'

const NotFoundPage = () => {
  return (
    <div>
      <NavBarContainer />
      <div className="warning-headline">
        <div className="page-status">404 Error.</div>
        <div className="page-message">
          Doggone it! The page you’re looking for cannot be found.
        </div>
      </div>
      <div className="taco-err">
        <img className="taco" src={window.taco404} />
      </div>
    </div>
  )
}

export default NotFoundPage
