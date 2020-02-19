import React from 'react';
import { Link } from 'react-router-dom';

const ChannelIndexItem = (props) => {
    debugger
    return (
        <Link to={`/main/channels/${props.channel.id}`}>
            <li>
                <span>#</span>
                {props.channel.name}
            </li>
        </Link>
    );
};

export default ChannelIndexItem;