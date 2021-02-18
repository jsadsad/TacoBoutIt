export const selectBusiness = ({ businesses }, businessId) => {
    return businesses[businessId] || { reviewIds: [] };
};

export const selectReviewsForBusiness = ({ businesses, reviews }, business) => {
    return business.reviewIds.map(reviewId => reviews[reviewId]);
};