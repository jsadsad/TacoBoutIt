export const selectBusiness = ({ businesses }, businessId) => {
  return businesses[businessId] || { reviewIds: [] }
}

export const getReviewsForBusiness = (state, ownProps) => {
  return Object.values(state.entities.reviews).filter(
    (review) => review.businessId == ownProps.businessId
  )
}
