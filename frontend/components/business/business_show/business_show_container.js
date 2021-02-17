import { connect } from 'react-redux'
import { fetchBusiness } from '../../../actions/business_actions'
import { selectBusiness, selectReviewsForBusiness } from '../../../reducers/selectors'
import BusinessShow from './business_show'

const mapStateToProps = (state, { match }) => {
    const businessId = parseInt(match.params.businessId)
    const business = selectBusiness(state.entities, businessId)
    return {
        businessId,
        business
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)