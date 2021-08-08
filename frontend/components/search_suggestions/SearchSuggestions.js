import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUtensils,
  faShippingFast,
  faCocktail,
} from '@fortawesome/free-solid-svg-icons'

const SearchSuggestions = () => {
  return (
    <div className="search-icons">
      <span className="search-fa-text">
        <FontAwesomeIcon icon={faUtensils} fixedWidth />
        Restaurants
      </span>
      <span className="search-fa-text">
        <FontAwesomeIcon icon={faCocktail} fixedWidth />
        Drinks
      </span>
      <span className="search-fa-text">
        <FontAwesomeIcon icon={faShippingFast} fixedWidth />
        Delivery
      </span>
    </div>
  )
}

export default SearchSuggestions
