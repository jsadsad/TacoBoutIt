import React from 'react'
import { Link } from 'react-router-dom'

const LandingNav = () => (
    <div className="landing-top-nav">
        <div className="landing-nav-left">
            <span>Write a Review</span>
            <span>Events</span>
            <span>Talk</span>
        </div>
        <div className="landing-nav-right">
            <span><Link to="/login">Log In</Link></span>
            <button><Link className="langin_nav_signup" to="/signup">Sign Up</Link></button>
        </div>
    </div>
    
)

export default LandingNav