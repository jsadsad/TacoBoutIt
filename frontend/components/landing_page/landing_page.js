import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../search_bar/search_bar'
import SearchSuggestions from '../search_suggestions/search_suggestions'
import LandingNav from './landing_nav/landing_nav_container'
import Footer from '../footer/footer'

const LandingPage = () => (
    <div className="landing-container">
        <div className="landing-search-area">
            <LandingNav />
            <Link to='/'><img className="taco-logo" src={window.tacoLogo} /></Link>
            <SearchBar />
            <SearchSuggestions />
        </div>
        <Footer />
    </div>
)
    


export default LandingPage