import { connect } from 'react-redux'
import { fetchAllBusinesses } from '../../../actions/business_actions'
import BusinessIndexItem from '../business_index_item/BusinessIndexItem'

const mapStateToProps = ({ entities }) => ({
  businesses: Object.values(entities.businesses),
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndexItem)
