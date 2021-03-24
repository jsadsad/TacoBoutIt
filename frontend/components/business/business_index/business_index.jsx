import React from 'react'
import NavbarContainer from '../../navbar/navbar_container'
import BusinessIndexItem from '../business_index_item/business_index_item'
import BusinessMap from '../../business/business_map/business_map'

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBusinesses()
  }

  render() {
    const { businesses } = this.props
    if (businesses === undefined || businesses.length === 0) return null
    return (
      <div>
        <NavbarContainer />
        <div className="biz-index-container">
          {businesses.map((business, index) => {
            return (
              <BusinessIndexItem
                business={business}
                key={index}
                index={index}
              />
            )
          })}
        </div>
        <div className="index-map-container">
          <BusinessMap businesses={Object.values(this.props.businesses)} />
        </div>
      </div>
    )
  }
}

export default BusinessIndex
