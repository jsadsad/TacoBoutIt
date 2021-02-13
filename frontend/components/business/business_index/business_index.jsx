import React from 'react';
import BusinessIndexItem from '../business_index_item/business_index_item'
import Navbar from '../../navbar/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH, faDollarSign} from '@fortawesome/free-solid-svg-icons'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusinesses()
    }

    render() {
        const { businesses } = this.props;
        return (
            <div>
                <Navbar />
                <div>
                    <div className="biz-index-container-border"></div>
                    <div className="biz-index-container">
                        <div className="biz-index-container-header">
                            <p className="biz-index-container-head-text">Best _____ in (SEARCH_RES) </p>
                            <div className="biz-index-container-subhead">
                                <div className="biz-index-container-subhead-1">
                                    <a className="biz-all-results" href="/#/businesses">All Results</a>
                                </div>
                                <div className="biz-index-container-subhead-2">
                                    <FontAwesomeIcon icon={faDollarSign} /> Price Range <FontAwesomeIcon icon={faDollarSign} />
                                    <ul className="biz-index-container-subhead-dropdown">
                                        <li onClick={() => this.update("$$$$")}><FontAwesomeIcon icon={faDollarSign} /></li>
                                    </ul>
                                </div>
                                <div className="biz-index-container-subhead-3">Open Now</div>
                                <div className="biz-index-subcontainer">
                                    <div className="biz-index-biz-list">
                                        {
                                            businesses.map((business, index) => {
                                                return (
                                                    <BusinessIndexItem
                                                        business={business}
                                                        key={index}
                                                        index={index}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessIndex