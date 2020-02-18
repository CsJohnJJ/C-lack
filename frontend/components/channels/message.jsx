import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render () {
        const { message, user } = this.props;
        debugger
        return (
            <div>
                <p></p>
                <p>{message.body}</p>
            </div>
        )
    }
}

export default Message;