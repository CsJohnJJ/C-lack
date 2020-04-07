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
        let channels = []
        let channelList;
// debugger
        if (this.props.channels){
            channels = this.props.channels
            channelList = Object.values(channels).map(channel => {    
                return (
                    <ChannelIndexItem
                        key={channel.id}
                        channel={channel}
                        currentUser = {this.props.currentUser}
                        deleteChannel = {this.props.destroyChannel}
                    />
                )
            })
        }
   
        return (

            <div>
                <div>
                    <h3 className="channel-title">Channels</h3>
                </div>
                <ul className="channelname-ul">
                    {channelList}
                </ul>
                <div className="whole-placeholder">
                    <div >
                        <h3 className="channel-title">Direct Messages</h3>
                    </div>
                    <ul className="dmname-ul">
                        <li className="dm-placeholder">
                            @ C-lackbot
                        </li>
                        <li className="dm-placeholder">
                            @ John Doe
                        </li>
                        <li className="dm-placeholder">
                            @ Greg, the TA
                        </li>
                    </ul>
                </div>

            </div>
        );
    };
};

export default ChannelIndex;