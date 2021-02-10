import { connect } from 'react-redux' //adds Redux
import Greeting from './greeting';
import { logout } from '../../actions/session_actions'

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)