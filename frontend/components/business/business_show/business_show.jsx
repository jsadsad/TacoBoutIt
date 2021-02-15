import React from 'react'
import NavbarContainer from '../../navbar/navbar_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faDollarSign, faStar, faCamera, faCheck } from '@fortawesome/free-solid-svg-icons'

class BusinessShow extends React.Component {

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render() {
        const { business } = this.props
        if (!business) return (<h1>Loading...</h1>)

        return (
            <div>
                <NavbarContainer />
                <div>
                    <div className="biz-show-container">
                        <div className="biz-show-container-top">
                            <div className="biz-show-container-name">
                                <h2>{business.name}</h2>
                                <div className="biz-show-container-category">
                                    <FontAwesomeIcon icon={faCheckCircle} size="sm" color="green" fixedWidth />Claimed &#183;&nbsp;
                                <FontAwesomeIcon icon={faDollarSign} size="xs" /><FontAwesomeIcon icon={faDollarSign} size="xs" /> &nbsp;&#183;&nbsp; {business.category}
                                </div>
                            </div>
                            <div className="biz-show-widgets">
                                <div className="biz-show-container-create-review">
                                    <FontAwesomeIcon icon={faStar} size="1x" fixedWidth />Write a Review
                                </div>
                                <div className="biz-show-container-add-photo">
                                    <FontAwesomeIcon icon={faCamera} size="1x" fixedWidth />Add Photo
                                </div>
                            </div>
                            <div className="biz-show-container-covid">
                                <div className="biz-show-container-covid-title">COVID-19 Updates</div>
                                <div className="biz-show-container-covid-subtitle">Updated Services</div>
                                <div className="biz-show-container-covid-icons">
                                    <div className="biz-show-container-covid-text"><FontAwesomeIcon icon={faCheck} size="sm" fixedWidth color="green" />&nbsp;Indoor dining</div>
                                </div>
                                
                                <div className="biz-show-container-covid-subtitle">Health & Safety Measures</div>
                                <div className="biz-show-container-covid-icons">
                                    <div className="biz-show-container-covid-text"><FontAwesomeIcon icon={faCheck} size="sm" fixedWidth color="green" />&nbsp;Masks required</div>
                                    <div className="biz-show-container-covid-text"><FontAwesomeIcon icon={faCheck} size="sm" fixedWidth color="green" />&nbsp;Limited capacity</div>
                                    <div className="biz-show-container-covid-text"><FontAwesomeIcon icon={faCheck} size="sm" fixedWidth color="green" />&nbsp;Hand sanitizer provided</div>
                                </div>

                            </div>
                            <div className="biz-show-container-hours-location">
                                <div className="biz-show-container-hours-location-title">Location & Hours</div>
                                <ul className="biz-show-container-hours-list">
                                    <li className="biz-show-availability-item">
                                        <div className="biz-show-day-item">Mon</div>
                                        <div className="biz-show-time-item">Closed</div>
                                    </li>
                                    <li className="biz-show-availability-item">
                                        <div className="biz-show-day-item">Tue</div>
                                        <div className="biz-show-time-item">12:30 PM - 8:00 PM</div>
                                    </li>
                                    <li className="biz-show-availability-item">
                                        <div className="biz-show-day-item">Wed</div>
                                        <div className="biz-show-time-item">11:30 PM - 8:00 PM</div>
                                    </li>
                                    <li className="biz-show-availability-item">
                                        <div className="biz-show-day-item">Thu</div>
                                        <div className="biz-show-time-item">11:30 PM - 8:00 PM</div>
                                    </li>
                                    <li className="biz-show-availability-item">
                                        <div className="biz-show-day-item">Fri</div>
                                        <div className="biz-show-time-item">12:30 PM - 9:00 PM</div>
                                    </li>
                                    <li className="biz-show-availability-item">
                                        <div className="biz-show-day-item">Sat</div>
                                        <div className="biz-show-time-item">12:30 PM - 8:00 PM</div>
                                    </li>
                                    <li className="biz-show-availability-item">
                                        <div className="biz-show-day-item">Sun</div>
                                        <div className="biz-show-time-item">12:30 PM - 8:00 PM</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="biz-reviews-container">
                                <div className="biz-show-container-reviews">Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessShow