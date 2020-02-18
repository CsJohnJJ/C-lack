import { connect } from "react-redux";
import MessageForm from "./messageform";
import { withRouter } from "react-router-dom";
// import {  } from "../../actions/message_actions"

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        currentUser: state.session.id, 
        channel: ownProps.channel
    };
};

const mapDispatchToProps =(dispatch) => {
    return {
    };
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(MessageForm));