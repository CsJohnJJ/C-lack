import { connect } from 'react-redux';
import Main from "./main";

const mapStateToProps = state => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id],
        channels: Object.values(state.entities.channels),
    }
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        getChannel: channelId => dispatch(getChannel(channelId)),
        updateUserChannels: (channelId, userId) => dispatch(updateUserChannels(channelId, userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);