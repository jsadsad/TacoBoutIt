import React from 'react'
import BusinessMap from '../business_map/business_map'
import NavbarContainer from '../../navbar/navbar_container'
import BusinessIndexItem from '../business_index_item/business_index_item'

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBusinesses()
  }

  render() {
    const { businesses } = this.props
    if (!businesses) return <h1>Loading...</h1>
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
        <BusinessMap />
      </div>
    )
  }
}

export default BusinessIndex
