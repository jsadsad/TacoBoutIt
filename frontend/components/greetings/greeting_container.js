import { connect } from 'react-redux' //adds Redux
import Greeting from './greeting';
import { logout } from '../../actions/session_actions'

//  passes as props to the presentational component currentUser from the state and the logout action creator.

const mapStateToProps = ({ session, entities: { users } }) => {
    let defaultSession;
    if (session.currentUser === undefined) {
        defaultSession = null;
    } else {
        defaultSession = session.currentUser.id
    }
    return {
        currentUser: users[defaultSession]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)