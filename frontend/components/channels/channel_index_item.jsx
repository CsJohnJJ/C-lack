import React from 'react';
import { Link } from 'react-router-dom';

const ChannelIndexItem = (props) => {
     
    return (
        <Link to={`/main/channels/${props.channel.id}`}>
            <li className="channelname-li">
                <span># </span>
                {props.channel.name}
            </li>
        </Link>
    );
};

export default ChannelIndexItem;