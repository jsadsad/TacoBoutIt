import React from 'react'
import SearchBar from '../search_bar/search_bar'
import LandingNav from './landing_nav'

const LandingPage = () => (
    <div>
        <LandingNav />
        <img className="taco-logo" src={window.tacoLogo} />
        <SearchBar />
    </div>
)

export default LandingPage