import { connect } from 'react-redux'
import { 
        fetchBusinesses,
        fetchBusiness
        } from '../../../actions/business_actions'
import BusinessIndex from './business_index'

const mapStateToProps = ({ entities }) => {
    return {
        businesses: Object.values(entities.businesses)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex)