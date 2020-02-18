import { connect } from "react-redux";
import Message from "./message";
import { updateMessage } from "../../actions/message_actions";

const mapStateToProps = (state, ownProps) =>{
    //  
    return {
        user: state.entities.users[ownProps.message.user_id]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: message => dispatch(updateMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);