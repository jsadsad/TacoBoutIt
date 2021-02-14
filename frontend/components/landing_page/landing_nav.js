import React from 'react'
import { Link } from 'react-router-dom'

const LandingNav = () => (
    <div className="landing-top-nav">
        <div className="landing-nav-left">
            <span>Write a Review</span>
            <Link className="landing-page-links" to="/businesses">Businesses</Link>
        </div>
        <div className="landing-nav-right">
            <Link className="landing-page-links" to="/login">Log In</Link>
            <Link className="landing_nav_signup" to="/signup">Sign Up</Link>
        </div>
    </div>
    
)

export default LandingNav