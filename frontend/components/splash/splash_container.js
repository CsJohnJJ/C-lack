import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Splash from "./splash";


const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
