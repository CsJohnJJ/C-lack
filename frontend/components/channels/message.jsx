import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
        const { message, user } = this.props;
        // const displayName = user.display_name
        // debugger
        return (
            <div className="message-div">
                {/* <p>{user.display_name}</p> */}
                <p className="message-text">{message.body}</p>
                <p className="message-date">{message.created_at}</p>
            </div>
        )
    }
}

export default Message;