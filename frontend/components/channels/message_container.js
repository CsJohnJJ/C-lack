import { connect } from "react-redux";
import Message from "./message";
import { fetchMessage, fetchMessages, fetchChannelMessages } from "../../actions/message_actions";
import { fetchUser, fetchUsers } from "../../actions/user_action";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) =>{
    return {
        user: state.entities.users[ownProps.message.user_id],

    };
};

const mapDispatchToProps = (dispatch) => {
    //  
    return {
      fetchChannelMessages: channelId => {
        return dispatch(fetchChannelMessages(channelId));
      },
      fetchMessage: id => dispatch(fetchMessage(id)),
      fetchUsers: () => dispatch(fetchUsers()),
      fetchUser: userId => dispatch(fetchUser(userId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Message));