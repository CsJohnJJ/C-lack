import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchUserChannels } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
     debugger
    return {
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels
    };
};

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        fetchUserChannels: (userId) => dispatch(fetchUserChannels(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);