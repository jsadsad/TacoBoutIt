import React, { useEffect } from 'react'
import NavbarContainer from '../../navbar/NavbarContainer'
import BusinessIndexItem from '../business_index_item/BusinessIndexItem'
import BusinessMap from '../business_map/BusinessMap'

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
