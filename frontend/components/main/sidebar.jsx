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
                <div className="sidebar-toplink">
                    <h1>
                        <Link to="/" className="home-link">
                            C-lack
                        </Link>
                    </h1>
                    <div className="online-name">
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/31GD9EibvwL.png" className="online-img" />
                        <p className="displayname">
                            {this.props.user.display_name}
                        </p>
                    </div>
                </div>
                <button onClick={this.props.logout} className="logout-button">Log out</button>

                <form  className="searchPlaceholder">
                    <input
                        type="text"
                        // value=""
                        // onChange={this.update("body")}
                        placeholder= "Jump to..."
                        className="searchBox"
                    />
                </form>
               
                <ChannelIndex />
            </div>
        );
    }
}

export default SideBar;