import React from 'react'
import SearchBar from '../search_bar/search_bar'
import SearchSuggestions from '../search_suggestions/search_suggestions'
import LandingNav from './landing_nav'

const LandingPage = () => (
    <div className="landing-container">
        <div className="landing-search-area">
            <LandingNav />
            <img className="taco-logo" src={window.tacoLogo} />
            <SearchBar />
            <SearchSuggestions />
        </div>
    </div>
)
    


export default LandingPage