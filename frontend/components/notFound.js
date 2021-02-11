import React from 'react'
import NavBarContainer from './navbar/navbar_container'

const NotFoundPage = () => {
    return (
        <div>
            <NavBarContainer />
            <div className="warning-headline">
                <div className="page-status">404 Error.</div>
                <div className="page-message">Doggone it! The page you’re looking for cannot be found.</div>
            </div>
        </div>
    )
}

export default NotFoundPage