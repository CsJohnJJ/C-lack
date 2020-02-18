import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchUserChannels } from '../../actions/channel_actions';

const mapStateToProps = (state) => {
    //  ;
    return {
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserChannels: (channelIds) => dispatch(fetchUserChannels(channelIds))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);