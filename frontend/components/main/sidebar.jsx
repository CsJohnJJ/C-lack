import React from 'react';
import ChannelIndex from '../channels/channel_index_container';
import { Link } from 'react-router-dom';


class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    dropMenu(e) {
        e.stopPropagation();

        const logoutButton = document.getElementsByClassName('logout-button')[0];
        const onlineName = document.getElementsByClassName('online-name')[0];

        if (logoutButton.classList.contains('active')) {
            logoutButton.classList.remove('active');
            onlineName.classList.remove('active');
        } else {
            logoutButton.classList.add('active');
            onlineName.classList.add('active');
        }
    };

    closeDropMenu(e) {
        e.stopPropagation();

        const logoutButton = document.getElementsByClassName('logout-button')[0];
        const outerDiv = document.getElementsByClassName('online-name')[0];

        if (cogList.classList.contains('active') && outerDiv.classList.contains('active')) {
            logoutButton.classList.remove('active');
            outerDiv.classList.remove('active');
        }
    }
   
    render() {
        return (
          <div className="sidebar-div" id="loggedIn">
            <div className="sidebar-toplink">
              <h1>
                <Link to="/" className="home-link">
                  C-lack
                </Link>
              </h1>
            </div>

            <div className="online-name" onClick={this.dropMenu.bind(this)}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/31GD9EibvwL.png"
                className="online-img"
              />
              <p className="displayname">
                {this.props.user.display_name}
                <img
                  src="https://i.ya-webdesign.com/images/white-arrow-down-png.png"
                  className="arrow-down"
                />
              </p>
            <button onClick={this.props.logout} className="logout-button">
              Log Out
            </button>
            </div>


            <form className="searchPlaceholder">
              <input
                type="text"
                // value=""
                // onChange={this.update("body")}
                placeholder="Jump to..."
                className="searchBox"
              />
            </form>

            <ChannelIndex />
          </div>
        );
    }
}

export default SideBar;