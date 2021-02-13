import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const BusinessIndexItem = ({ business, index }) => (
    <div className="biz-index-page-container">
        <div className="biz-index-details-container">
            <ul>
                <li className="biz-index-item">
                    <Link to={`/businesses/${business.id}`}>
                        {index + 1}. {business.business_name}
                    </Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faStar} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faStar} />
                </li>
                <li>
                    {business.address}
                </li>
                <li>
                    {business.city}
                    {business.state}
                    {business.zip_code}
                </li>
                <li>
                    <span>Takeout or Delivery?</span>
                </li>
                <li>
                </li>
            </ul>
        </div>
    </div>
)

export default BusinessIndexItem