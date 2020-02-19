import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        //  
        this.state = { body: "" };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        //  
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        //  
        App.currentChannel.speak({ message: this.state.body });
        this.setState({ body: "" });
    }
    

    render() {
        return (
            <div outer-messageform-div>
                <form onSubmit={this.handleSubmit.bind(this)} className="messageform">
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder= "Enter Message..."
                        className="message-box"
                    />
                    <input type="submit" className="messageform-submit"/>
                </form>
            </div>
        );
    }
}

export default MessageForm;