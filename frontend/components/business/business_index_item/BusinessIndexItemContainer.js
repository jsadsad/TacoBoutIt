import { connect } from 'react-redux'
import { fetchAllBusinesses } from '../../../actions/business_actions'
import BusinessIndex from '../business_index/BusinessIndex'

const mapStateToProps = ({ entities }) => ({
  businesses: Object.values(entities.businesses),
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex)
