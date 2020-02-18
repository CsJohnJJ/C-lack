import { connect } from "react-redux";
import Channel from "./channel";
import { fetchChannelMessages, receiveMessage, receiveMessages } from "../../actions/message_actions";
import { fetchChannels, fetchChannel, createChannel, destroyChannel }from "../../actions/channel_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    //  
    return {
        currentUser: state.entities.users[state.session.id],
        // channel: state.entities.channels[ownProps.match.params.channelId], //update to fetch all the channel
        messages: Object.values(state.entities.messages)
    };
};

const mapDispatchToProps = () => {
    // //  
    return {
        fetchChannel: (id) => dispatchEvent(fetchChannel(id)),
        fetchChannelMessages: (channelId) => {
            return (dispatch(fetchChannelMessages(channelId)))
        },
        receiveMessage: (id) => {
            return (dispatch(receiveMessage(id)))
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));