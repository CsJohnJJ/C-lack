import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
      constructor(props) {
        super(props);
        this.toggleSelect = this.toggleSelect.bind(this);
        this.prevId
    }

    toggleSelect(){
        this.prevId = this.props.channel.name;
        let selected = document.getElementById(this.props.channel.name)
        selected.setAttribute("id", "selected");
        
    }

    deleteChannel(channelId) {
        // this.props.destroyChannel(this.props.channel.id).then(()=> this.props.history.push("/main/channels/1"))
        console.log(channelId)
    }

    render(){
        let canDelete = () => {};
        let channelId = this.props.channel.id
        if (this.props.currentUser.id === this.props.channel.admin_id) {
            canDelete = () => { 
                return (
                <button onClick={this.deleteChannel(channelId)} className="channel-delete">x</button> 
                );
            };
        };
debugger
          return (
            <>
              <Link
                to={`/main/channels/${this.props.channel.id}`}
                onClick={this.toggleSelect}
              >
                <li className="channelname-li" id={this.props.channel.name}>
                  # {this.props.channel.name}
                {canDelete()}
                </li>
              </Link>
            </>
          );
    }
};

export default ChannelIndexItem;