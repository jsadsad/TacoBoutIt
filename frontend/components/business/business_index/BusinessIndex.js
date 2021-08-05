import React, { useEffect } from 'react'
import NavbarContainer from '../../navbar/navbar_container'
import BusinessIndexItem from '../business_index_item/business_index_item'
import BusinessMap from '../business_map/business_map'

const BusinessIndex = (props) => {
  const { fetchBusinesses, businesses } = props

  useEffect(() => {
    fetchBusinesses()
  }, [])

  const allBiz = businesses.map((business, idx) => {
    return (
      <BusinessIndexItem key={business.id} business={business} index={idx} />
    )
  })

  if (!businesses.length) return null
  return (
    <div>
      <NavbarContainer />
      <div className="biz-index-container">
        <div className="biz-index-item">{allBiz}</div>
        <div className="biz-index-right">
          <div className="biz-map-container">
            <BusinessMap businesses={businesses} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessIndex
