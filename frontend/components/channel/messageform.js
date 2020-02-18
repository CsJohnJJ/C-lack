import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        App.currentChannel.speak({ message: this.state.body });
        this.setState({ body: "" });
    }
    

    render() {
        // const placeholdertext = `${ this.state.channel }`
        // debugger
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder= "Enter message..."
                        className="message-box"
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default MessageForm;