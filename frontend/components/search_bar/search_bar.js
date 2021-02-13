import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
    return (
        <div>
            <div className="field has-addons">
                <p className="control">
                    <span className="button is-static">Find</span>
                </p>
                <p className="control">
                    <input className="input" type="text" placeholder="plumbers, delivery, takeout..."/>
                </p>
                <p className="control">
                    <span className="button is-static">Near</span>
                </p>
                <p className="control">
                    <input className="input" type="text" placeholder="city, state, or zip..."/>
                </p>
                <div className="button.is-static search-mag">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </div>
    )
}

export default SearchBar
