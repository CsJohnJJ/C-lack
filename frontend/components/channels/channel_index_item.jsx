import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.prevId;
    this.removeChannel = this.removeChannel.bind(this);
    this.state = { channel: this.props.channel};
  }

  toggleSelect() {
    let selected = document.getElementById(this.props.channel.name);
    selected.setAttribute("id", "selected");
  }

  removeChannel(e) {
    e.preventDefault();
    // let path ="/main/channels/1";
    // this.props.history.location.pathname === "/main/channels/1" ? path = "/main/channels/2" : null
   let modal = document.getElementById("myModal");
   modal.style.display = "none";
    this.props
      .deleteChannel(this.props.channel.id)
      // .then(() => this.props.history.push(path));
    // .then(() => this.setState({ state: this.state })

  }

  // componentWillUnmount(){
  //   this.setState({ channel: this.state });
  // }

  componentDidMount(){
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];
    let yes = document.getElementsByClassName("modal-yes")[0];
    if (btn){
      btn.onclick = function () {
        modal.style.display = "block";
      };
    };

    if (span) {
      span.onclick = function () {
        modal.style.display = "none";
      };
    }
    if (yes){
      yes.onclick = this.removeChannel;
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  render() {

    let canDelete;
    let channelId = this.props.channel.id;
    if (this.props.currentUser.id === this.props.channel.admin_id) {
      canDelete =
        <>
          <button id="myBtn">X</button>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <p className="modal-text">Confirm channel deletion:</p>
              <button className="modal-yes">Yes</button>
              <span className="close">No</span>
            </div>
          </div>
        </>
    }


    
    return (
      <div className="channelli-outer" id={this.props.channel.name}>
        <Link
          to={`/main/channels/${this.props.channel.id}`}
          onClick={this.toggleSelect}
        >
          <li className="channelname-li" id={this.props.channel.name}>
            # {this.props.channel.name}
          </li>
        </Link>
        {canDelete}
      </div>
    );
  }
};

export default withRouter(ChannelIndexItem);