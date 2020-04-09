import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.prevId;
    this.removeChannel = this.removeChannel.bind(this);
    this.state = this.props.channel;
  }

  toggleSelect() {
    let selected = document.getElementById(this.props.channel.name);
    selected.setAttribute("id", "selected");
  }

  removeChannel(e) {
    e.preventDefault();
    let path ="/main/channels/1";
    this.props.history.location.pathname === "/main/channels/1" ? path = "/main/channels/2" : null

    this.props
      .deleteChannel(this.props.channel.id)
      .then(() => this.props.history.push(path));
    // this.setState({ state: this.state })
  }

  render() {
    let canDelete = () => {};
    let channelId = this.props.channel.id;
    if (this.props.currentUser.id === this.props.channel.admin_id) {
      canDelete = () => {
        return (
          <button onClick={this.removeChannel} className="channel-delete">
            x
          </button>
        );
      };
    }
    return (
      <div className="channelli-outer">
        <Link
          to={`/main/channels/${this.props.channel.id}`}
          onClick={this.toggleSelect}
        >
          <li className="channelname-li" id={this.props.channel.name}>
            # {this.props.channel.name}
          </li>
        </Link>
        {canDelete()}
      </div>
    );
  }
};

export default withRouter(ChannelIndexItem);