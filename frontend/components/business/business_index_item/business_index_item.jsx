import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const BusinessIndexItem = ({ business, index }) => (
    <div className="biz-index-search-result">
        <img src="https://via.placeholder.com/210" className="biz-image" alt="business_image" />
        <div className="biz-info">
            <h2 className="biz-index-subtitle"><Link to={`/businesses/${business.id}`}>{index + 1}. {business.name}</Link></h2>
            <p><FontAwesomeIcon icon={faDollarSign} size="xs" /><FontAwesomeIcon icon={faDollarSign} size="xs"/></p>
            <span className="biz-category-tag">{business.category}</span>
        </div>
        <div className="biz-index-contact-info">
            <p>{business.phone_number}</p>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state}</p>
            <p>{business.zip_code}</p>
        </div>
        <p className="biz-take-out">Takeout or Delivery?</p>
    </div>
)

export default BusinessIndexItem