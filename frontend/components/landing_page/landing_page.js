import React from 'react'
import { Link } from 'react-router-dom'
import LandingSuggestions from './landing_suggestions/landing_suggestions'
import SearchBar from '../search_bar/search_bar'
import SearchSuggestions from '../search_suggestions/search_suggestions'
import LandingNav from './landing_nav/landing_nav_container'
import Footer from '../footer/footer'

const LandingPage = () => (
  <div>
    <div className="landing-container">
      <div className="landing-search-area">
        <LandingNav />
        <img className="taco-logo" src={window.tbiLogo} />
        <SearchBar />
        <SearchSuggestions />
      </div>
    </div>
    <div>
      <LandingSuggestions />
    </div>
    <Footer />
  </div>
)

export default LandingPage
