import React from 'react'
import NavbarContainer from '../../navbar/navbar_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faDollarSign, faStar, faCamera } from '@fortawesome/free-solid-svg-icons'

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
                                    <FontAwesomeIcon icon={faStar} size="md" fixedWidth />Write a Review
                            </div>
                                <div className="biz-show-container-add-photo">
                                    <FontAwesomeIcon icon={faCamera} size="md" fixedWidth />Add Photo
                            </div>
                            </div>
   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessShow