import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Link } from 'react-router-dom';

class ChannelIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserChannels(this.props.currentUser.id)
    }

    render() {
        const channelList = Object.values(this.props.channels).map(ch => {
            return (
                <ChannelIndexItem
                    key={[ch.id, ch.id]}
                    channel={ch}
                />
            )
        })

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