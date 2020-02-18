import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        debugger
        const { message, user } = this.props;
        return (
            <div>
                <p>{message.body}</p>
            </div>
        )
    }
}

export default Message;