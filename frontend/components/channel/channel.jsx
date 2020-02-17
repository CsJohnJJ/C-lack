import React from "react";
import MessageForm from "./messageform";
import MessageFormContainer from "./messageform_container"
import { receiveMessages } from "../../actions/message_actions";

class Channel extends React.Component {
    constructor(props) {
        super(props);
        debugger
        let channelId = parseInt(props.match.params.channelId);
        // let channelMessages = this.props.fetchChannelMessages(channelId);
        this.getCurrentChannel = this.getCurrentChannel.bind(this);
    }

    getCurrentChannel(channelId) {
        // clear currentChannel if there is already a channel
        if (App.currentChannel) {
            App.currentChannel.unsubscribe();
        }
        debugger
        const { receiveMessage, receiveMessages } = this.props;
        App.currentChannel = App.cable.subscriptions.create(
            { channel: "ChatChannel", id: channelId },
            {
                received: (data) => {
                    switch (data.type) {
                        case "message":
                            receiveMessage(JSON.parse(data.message)); //passing incoming
                            break;
                        case "messages":
                            receiveMessages(JSON.parse(data.messages));
                            break;
                }
            },
                speak: function (data) {  
                    debugger 
                    return this.perform("speak", data)},
                load: function () { return this.perform("load")}
            }
        );
    };

    componentDidMount() {
        // this.props.fetchChannels(this.props.currentUser.channel.id)
        // const { receiveMessage } = this.props;
        debugger
        const { channels, fetchChannelMessages } = this.props;
        const channelId = this.props.match.params.channelId;
        this.getCurrentChannel(channelId);
        // fetchChannelMessages(channelId);
    }


    render() {
        debugger
        return (
            <div>
                <h1> Channel Con</h1>
                {/* <div> {this.getCurrentChannel()} </div> */}
                {/* <h1>{channels.name}</h1> */}
                {/* <MessageForm /> */}
            </div>
        );
    };
};

export default Channel;
