import React from 'react'
import LandingNav from './landing_nav'

const LandingPage = () => (
    <div>
        <LandingNav />
        <img className="taco-logo" src={window.tacoLogo} />
    </div>
)

export default LandingPage