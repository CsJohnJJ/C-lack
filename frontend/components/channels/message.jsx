import React from "react";
import { useStore } from "react-redux";
import { FaUser } from "react-icons/fa";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidUpdate(prevProps) {
        debugger
        if (prevProps.match.params.channelId !== this.props.match.params.channelId){
            this.props.fetchChannelMessages(this.props.match.params.channelId);
            window.location.reload();
        }
    };

    render () {
        const { message, user, fetchUsers, fetchUser} = this.props;
        // const authorName = fetchUser(message.user_id)
        const displayName = ((user && user.display_name) ? user.display_name : message.display_name);
    ;
        let createdAt = (new Date(message.created_at)).toLocaleTimeString()
        return (
          <div className="message-div">
            <div className="who-div">
              <FaUser />
            </div>

            <p className="message-author">{displayName}</p>
            <p className="message-date">{createdAt}</p>
            <p className="message-text">{message.body}</p>
            <div ref={this.bottom}></div>
          </div>
        );
    }
}

export default Message;