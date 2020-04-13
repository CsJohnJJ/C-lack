import React from 'react';
import ChannelIndexItem from './channel_index_item';
import CreateChannelForm from "./create_channel_form_container";
import { Link } from 'react-router-dom';


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserChannels(this.props.currentUser.id);
  }
  
  createCh() {
    this.props.createChannel(channel);
  }


  render() {
    let channels = [];
    let channelList;

    if (this.props.channels) {
      channels = this.props.channels;
      channelList = Object.values(channels).map((channel) => {
        return (
          <ChannelIndexItem
            key={channel.id}
            channel={channel}
            currentUser={this.props.currentUser}
            deleteChannel={this.props.destroyChannel}
          />
        );
      });
    }

    return (
      <div>
        <div className="title-create">
          <h3 className="channel-title">Channels</h3>
          <Link className="create-link" to="/main/channels/create">
            <img
              className="create-button"
              src="https://ya-webdesign.com/images600_/png-white-plus-sign-6.png"
              onClick={this.toggleChannelCreateModal}
            />
          </Link>
        </div>
        <ul className="channelname-ul">{channelList}</ul>
        <div className="whole-placeholder">
          <div>
            <h3 className="channel-title">Direct Messages</h3>
          </div>
          <ul className="dmname-ul">
            <li className="dm-placeholder">@ C-lackbot</li>
            <li className="dm-placeholder">@ John Doe</li>
            <li className="dm-placeholder">@ Greg, the TA</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default ChannelIndex;