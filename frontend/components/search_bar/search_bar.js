import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  return (
    <div className="search-bar-container">
      <FindInput />
      <NearInput />
      <SearchButton />
    </div>
  )
}

function FindInput() {
  return (
    <div className="search-bar-input-container">
      <span className="search-bar-input-label">Find</span>
      <input
        className="search-bar-input"
        type="text"
        placeholder="plumbers, delivery, takeout..."
      />
    </div>
  )
}

function NearInput() {
  return (
    <div className="search-bar-input-container">
      <span className="search-bar-input-label">Near</span>
      <input
        className="search-bar-input"
        type="text"
        placeholder="address, city, state, or zip..."
      />
    </div>
  )
}

function SearchButton() {
  return (
    <div className="search-bar-search-mag">
      <FontAwesomeIcon icon={faSearch} size="24px" />
    </div>
  )
}

export default SearchBar
