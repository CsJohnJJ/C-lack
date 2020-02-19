import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Link } from 'react-router-dom';

class ChannelIndex extends React.Component {

    constructor(props) {
        super(props);
        debugger
    }

    componentDidMount() {
        this.props.fetchUserChannels(this.props.currentUser.id)
    }

    render() {
        let channels = this.props.fetchUserChannels(this.props.currentUser.id);
        const channelList = Object.values(channels).map(channel => {
            debugger
            return (
                <ChannelIndexItem
                    key={channel.id}
                    channel={channel}
                />
            )
        })
        debugger
        return (
            <div>
                <div>
                    <h3>Channels</h3>
                </div>
                <ul>
                    {channelList}
                </ul>
            </div>
        );
    };
};

export default ChannelIndex;