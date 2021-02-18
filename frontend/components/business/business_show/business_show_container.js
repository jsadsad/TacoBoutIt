import { connect } from 'react-redux'
import { fetchBusiness } from '../../../actions/business_actions'
import { fetchReviews } from '../../../actions/review_actions'
import { selectBusiness } from '../../../reducers/selectors'
import BusinessShow from './business_show'

const mapStateToProps = (state, { match }) => {
    const businessId = parseInt(match.params.businessId)
    const business = selectBusiness(state.entities, businessId)
    const reviews = Object.values(state.entities.reviews).filter(
        (review) => review.business_id == match.params.id
    )
    return {
        businessId,
        business,
        reviews
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)