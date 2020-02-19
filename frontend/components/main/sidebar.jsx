import React from 'react';
import ChannelIndex from '../channels/channel_index_container';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //  
        return (
            <div className="sidebar-div">
                <h1>
                    <Link to="/" className="home-link">
                        C-lack
                    </Link>
                </h1>
                <h3 className="displayname">
                    {this.props.user.display_name}
                </h3>
                <button onClick={this.props.logout} className="logout-burron">Log out</button>
                <ChannelIndex />
            </div>
        );
    }
}

export default SideBar;