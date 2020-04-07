import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchUserChannels, destroyChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {    
    return {
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels
    };
};

const mapDispatchToProps = (dispatch) => {  
    return {
      fetchUserChannels: userId => dispatch(fetchUserChannels(userId)),
      destroyChannel: id => dispatch(destroyChannel(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);