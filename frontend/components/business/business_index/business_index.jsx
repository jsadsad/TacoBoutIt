import React from 'react'
import NavbarContainer from '../../navbar/navbar_container'
import BusinessIndexItem from '../business_index_item/business_index_item'
import BusinessMap from '../../business/business_map/business_map'

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses()
  }

  render() {
    const { businesses } = this.props
    if (businesses === undefined || businesses.length === 0) return null

    const allBiz = businesses.map((business, idx) => {
      return (
        <BusinessIndexItem key={business.id} business={business} index={idx} />
      )
    })

    return (
      <div>
        <NavbarContainer />
        <div className="biz-index-container">
          <div className="biz-index-item">{allBiz}</div>
          <div className="biz-index-right">
            <div className="biz-map-container">
              <BusinessMap businesses={this.props.businesses} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessIndex
