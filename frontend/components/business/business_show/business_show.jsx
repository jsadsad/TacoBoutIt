import React from 'react'
import NavbarContainer from '../../navbar/navbar_container'
import ReviewItemContainer from '../../review/review_item/review_item_container'
import BusinessMap from '../business_map/business_map'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faDollarSign,
  faStar,
  faCheck,
  faDirections,
  faPhoneAlt,
  faShareSquare,
} from '@fortawesome/free-solid-svg-icons'

class BusinessShow extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
    this.props.fetchReviews(this.props.match.params.businessId)
    this.props.fetchUsers()
  }

  render() {
    const { business, reviews, users, deleteReview } = this.props

    let picturesHeader
    if (business.pictures) {
      picturesHeader = business.pictures.map((pic, idx) => {
        return (
          <div key={idx}>
            <img className="biz-img" src={pic} alt="biz-picture" />
          </div>
        )
      })
    } else {
      picturesHeader = ''
    }

    if (!business) return <h1>Loading...</h1>

    return (
      <div>
        <NavbarContainer />
        <div className="biz-pic-header">{picturesHeader}</div>
        <div className="biz-show-container-name">
          <h2>{business.name}</h2>
          <div className="biz-show-container-category">
            <div className="biz-show-container-claimed">
              <FontAwesomeIcon icon={faCheckCircle} size="sm" fixedWidth />
              Claimed &#183;&nbsp;
            </div>
            <FontAwesomeIcon icon={faDollarSign} size="xs" />
            <FontAwesomeIcon
              icon={faDollarSign}
              size="xs"
            /> &nbsp;&#183;&nbsp; {business.category}
          </div>
        </div>
        <div className="biz-show-container">
          <div className="biz-show-left">
            <div className="biz-show-container-top">
              <div className="biz-show-widgets">
                <div className="biz-show-container-create-review">
                  <Link
                    to={`/businesses/${business.id}/reviews/new`}
                    className="biz-show-container-review-btn"
                  >
                    <FontAwesomeIcon icon={faStar} size="1x" fixedWidth />
                    Write a Review
                  </Link>
                </div>
              </div>
              <div className="biz-show-container-covid">
                <div className="biz-show-container-covid-title">
                  COVID-19 Updates
                </div>
                <div className="biz-show-container-covid-subtitle">
                  Updated Services
                </div>
                <div className="biz-show-container-covid-icons">
                  <div className="biz-show-container-covid-text">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="sm"
                      fixedWidth
                      color="green"
                    />
                    &nbsp;Indoor dining
                  </div>
                </div>

                <div className="biz-show-container-covid-subtitle">
                  Health & Safety Measures
                </div>
                <div className="biz-show-container-covid-icons">
                  <div className="biz-show-container-covid-text">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="sm"
                      fixedWidth
                      color="green"
                    />
                    &nbsp;Masks required
                  </div>
                  <div className="biz-show-container-covid-text">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="sm"
                      fixedWidth
                      color="green"
                    />
                    &nbsp;Limited capacity
                  </div>
                  <div className="biz-show-container-covid-text">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="sm"
                      fixedWidth
                      color="green"
                    />
                    &nbsp;Hand sanitizer provided
                  </div>
                </div>
              </div>
              <div className="biz-show-container-hours-location">
                <div className="biz-show-container-hours-location-title">
                  Location & Hours
                </div>
                <ul className="biz-show-container-hours-list">
                  <li className="biz-show-availability-item">
                    <div className="biz-show-day-item">Mon</div>
                    <div className="biz-show-time-item">{business.hours}</div>
                  </li>
                  <li className="biz-show-availability-item">
                    <div className="biz-show-day-item">Tue</div>
                    <div className="biz-show-time-item">{business.hours}</div>
                  </li>
                  <li className="biz-show-availability-item">
                    <div className="biz-show-day-item">Wed</div>
                    <div className="biz-show-time-item">{business.hours}</div>
                  </li>
                  <li className="biz-show-availability-item">
                    <div className="biz-show-day-item">Thu</div>
                    <div className="biz-show-time-item">{business.hours}</div>
                  </li>
                  <li className="biz-show-availability-item">
                    <div className="biz-show-day-item">Fri</div>
                    <div className="biz-show-time-item">{business.hours}</div>
                  </li>
                  <li className="biz-show-availability-item">
                    <div className="biz-show-day-item">Sat</div>
                    <div className="biz-show-time-item">{business.hours}</div>
                  </li>
                  <li className="biz-show-availability-item">
                    <div className="biz-show-day-item">Sun</div>
                    <div className="biz-show-time-item">{business.hours}</div>
                  </li>
                </ul>
              </div>
              <div className="biz-reviews-container">
                <div className="biz-show-container-reviews">Reviews</div>
                {reviews.map((review, idx) => {
                  return (
                    <ReviewItemContainer
                      key={idx}
                      business={business}
                      review={review}
                      author={users[review.authorId]}
                      deleteReview={deleteReview}
                    />
                  )
                })}
              </div>
            </div>
          </div>
          <div className="biz-show-right">
            <div className="biz-right-widget">
              <div className="biz-widget-content">
                <ul>
                  <li>
                    <FontAwesomeIcon
                      icon={faShareSquare}
                      size="sm"
                      fixedWidth
                    />
                    <a href={business.website} target="_blank">
                      &nbsp;Website
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhoneAlt} size="sm" fixedWidth />
                    <span>&nbsp;{business.phoneNumber}</span>
                  </li>
                  <li className="biz-widget-right-location">
                    <FontAwesomeIcon icon={faDirections} size="sm" fixedWidth />
                    <a
                      className="biz-right-location-link"
                      href={`https://www.google.com/maps/dir/?api=1&destination=${business.lat},${business.lng}`}
                      target="_blank"
                    >
                      &nbsp;Get Directions
                    </a>
                    <div className="biz-right-location-subtitle">
                      {business.address} {business.city} {business.state}{' '}
                      {business.zipCode}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="google-maps">
                <BusinessMap businesses={business} type="show" zoom="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessShow
