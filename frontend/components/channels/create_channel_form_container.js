import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        channel:{
            name: "",
            description: "",
            is_private: false
        }
        formType: "Create"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: (channel) => dispatch(createChannel(channel))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);