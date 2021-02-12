import { connect } from 'react-redux'
import BusinessIndex from './business_index'
import { 
    fetchBusinesses,
    fetchBusiness
    } from '../../../actions/business_actions'

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