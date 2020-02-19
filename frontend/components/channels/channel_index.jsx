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
        // //THIS IS CAUSING A INFINITE LOOP
        // let channels = this.props.fetchUserChannels(this.props.currentUser.id);
        let channels = []
        let channelList;
        //  
        if (this.props.channels){
            channels = this.props.channels
            channelList = Object.values(channels).map(channel => {
                  
                return (
                    <ChannelIndexItem
                        key={channel.id}
                        channel={channel}
                    />
                )
            })
        }
        // //END HERES
        //  
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