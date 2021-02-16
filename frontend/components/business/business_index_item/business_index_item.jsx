import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'


const BusinessIndexItem = ({ business, index }) => (
    <div className="biz-index-search-result">
        <img src={business.indexPicture} className="biz-image" alt="business_image" />
        
        <div className="biz-info">
            <h2><Link className="biz-index-subtitle" to={`/businesses/${business.id}`}>{index + 1}. {business.name}</Link></h2>
            <p><FontAwesomeIcon icon={faDollarSign} color="grey" size="xs" /><FontAwesomeIcon icon={faDollarSign} size="xs" color="grey"/><span className="biz-category-tag">{business.category}</span></p>
            <div className="biz-outdoor-takeout">
                <FontAwesomeIcon icon={faCheck} size="lg" color="green" fixedWidth/>Delivery
                <FontAwesomeIcon icon={faCheck} size="lg" color="green" fixedWidth/>Takeout
                <FontAwesomeIcon icon={faTimes} size="lg" color="red" fixedWidth />Outdoor Seating
            </div>
        </div>
        <div className="biz-index-contact-info">
            <p>{business.phoneNumber}</p>
            <p>{business.address}</p>
        </div>
    </div>
)

export default BusinessIndexItem

