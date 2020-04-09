import React from "react";
import MessageForm from "./messageform";
import MessageFormContainer from "./messageform_container"
import Sidebar from "../main/sidebar_container";
import MessageContainer from "./message_container";
import { FaRegStar, FaUsers } from "react-icons/fa";
// import { receiveMessages, receiveMessage } from "../../actions/message_actions";


class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.channelId = parseInt(props.match.params.channelId);
    let channelMessages = this.props.fetchChannelMessages(this.channelId);
    this.getCurrentChannel = this.getCurrentChannel.bind(this);
    this.bottom = React.createRef();
  }

  getCurrentChannel(channelId) {
    if (App.currentChannel) {
      App.currentChannel.unsubscribe();
    }
    const { receiveMessage, receiveMessages } = this.props;
    App.currentChannel = App.cable.subscriptions.create(
      { channel: "ChatChannel", id: channelId },
      {
        received: data => {
          switch (data.type) {
            case "message":
              receiveMessage(JSON.parse(data.message)); //passing incoming
              break;
            case "messages":
              receiveMessages(JSON.parse(data.messages));
              break;
          }
        },
        speak: function(data) {
          return this.perform("speak", data);
        },
        load: function() {
          return this.perform("load");
        }
      }
    );
  }

  componentDidMount() {
    // this.props.fetchChannels(this.props.currentUser.channel.id)
    // const { receiveMessage } = this.props;
    //
    const { fetchChannelMessages } = this.props;
    // const channelId = this.props.match.params.channelId;
    this.getCurrentChannel(this.channelId);
    fetchChannelMessages(this.channelId);
  }

  componentDidUpdate(prevProps) {
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  render() {
    let messageList;
    let channelName;
    let channelMembers;
    const { messages, channel } = this.props;
    if (channel) {
      channelName = channel.name;
      channelMembers = channel.users.length;
    }

    messageList = messages.map(message => {
      //
      if (message.messageble_id === this.channelId) {
        return <MessageContainer key={message.id} message={message} />;
      }
    });
    // }
    return (
      <div className="channel-div">
        <div className="outer-info">
          <div className="topinfo-nav">
            <p className="channelName-p"> #{channelName}</p>
            <div className="star-amount">
              <div className="star-img">
                <FaRegStar />
              </div>
              <span className="the-line">|</span>
              <div className="amount-p">
                {/* <img
                            src="https://image.flaticon.com/icons/svg/615/615075.svg"
                            className="amount-img"
                            /> */}
                <div className="length-img">
                  <FaUsers />
                </div>
                {channelMembers}
              </div>
            </div>
          </div>
        </div>
        <div className="messageandform-div">
          <ul className="whole-messagelist">{messageList}</ul>
          <div ref={this.bottom}></div>
        </div>
        <MessageFormContainer channel={this.props.channel} />
      </div>
    );
  }
};

export default Channel;
