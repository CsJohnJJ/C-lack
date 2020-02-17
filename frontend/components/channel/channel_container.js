import { connect } from "react-redux";
import Channel from "./channel";
import { fetchChannelMessages, receiveMessage, receiveMessages } from "../../actions/message_actions";
import { fetchChannels, fetchChannel, createChannel, destroyChannel }from "../../actions/channel_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels[ownProps.match.params.channelId],
        messages: Object.values(state.entities.messages)
    };
};

const mapDispatchToProps = () => {
    debugger
    return {
        // fetchChannels: () => dispatchEvent(fetchChannels()),
        fetchChannelMessages: (channelId) => {
            return (dispatch(fetchChannelMessages(channelId)))
        },
        receiveMessage: (message) => {
            return (dispatch(receiveMessage(message)))
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));