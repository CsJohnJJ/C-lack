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
        App.currentChannel.speak({ message: this.state.body });
        this.setState({ body: "" });
    }
    

    render() {
        let name;
        this.props.channel ? name = this.props.channel.name : null
        
        return (
          <div className="outer-messageform-div">
            <form
              onSubmit={this.handleSubmit.bind(this)}
              className="messageform"
            >
              <input
                type="text"
                value={this.state.body}
                onChange={this.update("body")}
                placeholder={`Message #${name}`}
                className="message-box"
              />
              <input type="submit" className="messageform-submit" />
            </form>
          </div>
        );
    }
}

export default MessageForm;