import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';

const mapStateToProps= (state) => {
    debugger
    return {
        user: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);