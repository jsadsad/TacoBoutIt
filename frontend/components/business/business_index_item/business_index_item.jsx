import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDollarSign,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const BusinessIndexItem = ({ business, index }) => (
  <div className="biz-search-container">
    <Link to={`/businesses/${business.id}`}>
      <div className="biz-index-search-result">
        <div
          className="biz-image"
          style={{ backgroundImage: `url(${business.indexPicture})` }}
        />
        <div className="biz-info">
          <h2>
            <div className="biz-index-subtitle">
              {index + 1}. {business.name}
            </div>
          </h2>
          <p>
            <FontAwesomeIcon icon={faDollarSign} color="grey" size="xs" />
            <FontAwesomeIcon icon={faDollarSign} size="xs" color="grey" />
            <span className="biz-category-tag">{business.category}</span>
          </p>
          <div className="biz-outdoor-takeout d-flex">
            <div>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                color="green"
                fixedWidth
              />
              <span>Delivery</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                color="green"
                fixedWidth
              />
              <span>Takeout</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faTimes}
                size="lg"
                color="red"
                fixedWidth
              />
              <span>Outdoor Seating</span>
            </div>
          </div>
        </div>
        <div className="biz-index-contact-info">
          <p>{business.phoneNumber}</p>
          <p>{business.address}</p>
        </div>
      </div>
    </Link>
  </div>
)

export default BusinessIndexItem
