import React from 'react';
import ChannelIndex from '../channels/channel_index_container';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger
        return (
            <div>
                <h1>
                    <Link to="/">
                        C-lack
                    </Link>
                </h1>
                <h3>
                    {this.props.user.display_name}
                </h3>
                <button onClick={this.props.logout}>Log out</button>
                <ChannelIndex />
            </div>
        );
    }
}

export default SideBar;