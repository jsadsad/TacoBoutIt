export const selectBusiness = ({ businesses }, businessId) => {
  return businesses[businessId] || { reviewIds: [] }
}

export const getReviewsForBusiness = (state, ownProps) => {
  return Object.values(state.entities.reviews).filter(
    (review) => review.businessId == ownProps.businessId
  )
}

export const getAmericanBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'American (Traditional)'
  )
}

export const getItalianBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Italian'
  )
}

export const getThaiBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Thai'
  )
}

export const getJapaneseBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Japanese'
  )
}

export const getChineseBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Chinese'
  )
}

export const getKoreanBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Korean'
  )
}

export const getCofTeaBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Coffee & Tea'
  )
}
