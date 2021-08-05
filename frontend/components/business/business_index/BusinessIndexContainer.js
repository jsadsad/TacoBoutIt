import { connect } from 'react-redux'
import { fetchBusinesses } from '../../../actions/business_actions'
import BusinessIndex from './BusinessIndex'

const mapStateToProps = ({ entities }) => {
  return {
    businesses: Object.values(entities.businesses),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex)
