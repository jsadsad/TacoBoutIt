import { connect } from 'react-redux';
import { fetchAllBusinesses } from '../../../util/business_api_util'
import BusinessIndex from './business_index';

const mapStateToProps = ({ entities }) => ({
    businesses: Object.values(entities.businesses),
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);