import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
        const { message, user } = this.props;
          
        return (
            <div className="message-div">
                {/* <p>{user}</p> */}
                <p className="message-text">{message.body}</p>
            </div>
        )
    }
}

export default Message;