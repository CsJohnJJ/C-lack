import React from "react";
import MessageForm from "./messageform";
import MessageFormContainer from "./messageform_container"
import Sidebar from "../main/sidebar_container";
import MessageContainer from "./message_container";
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
        // clear currentChannel if there is already a channel
        // debugger
        if (App.currentChannel) {
            App.currentChannel.unsubscribe();
        }
        // debugger
        const { receiveMessage, receiveMessages } = this.props;
        App.currentChannel = App.cable.subscriptions.create(
            { channel: "ChatChannel", id: channelId },
            {
                received: (data) => {
                    switch (data.type) {
                        case "message":
                            // debugger
                            receiveMessage(JSON.parse(data.message)); //passing incoming
                            break;
                        case "messages":
                            // debugger
                            receiveMessages(JSON.parse(data.messages));
                            break;
                }
            },
                speak: function (data) {  
                    // debugger 
                    return this.perform("speak", data)},
                load: function () { return this.perform("load")}
            }
        );
    };

    componentDidMount() {
        // this.props.fetchChannels(this.props.currentUser.channel.id)
        // const { receiveMessage } = this.props;
        // debugger
        const { fetchChannelMessages } = this.props;
        // const channelId = this.props.match.params.channelId;
        this.getCurrentChannel(this.channelId);
        // debugger
        fetchChannelMessages(this.channelId);
    };


    render() {
        let messageList;
        const { messages } = this.props;
        // if (channel && channel.id  == this.props.match.params.channelId) {
            messageList = messages.map(message => {
                if (message.messageble_id === this.channelId) {
                    return <MessageContainer key={message.id} message={message} />
                }
            });
        // }
        // debugger
        return (
            <div>
                <Sidebar />
                <div>
                    <ul>
                        {messageList}
                    </ul>
                    {/* <div ref={this.bottom}></div> */}
                </div>
                <h1> Channel Component</h1>
                <MessageFormContainer />
            </div>
        );
    }
};

export default Channel;
