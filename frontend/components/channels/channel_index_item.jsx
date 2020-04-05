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

    deleteChannel() {
        this.props.destroyChannel(this.props.channel.id).then(()=> this.props.history.push("/main/channels/1"))
    }

    render(){
        // WORKING ON DELETE CHANNEL. check currentuser === channel.adminid
        return (
            <>
            <Link to={`/main/channels/${this.props.channel.id}`}  onClick={this.toggleSelect}>
                <li className="channelname-li" id={this.props.channel.name}>
                    <span># </span>
                    {this.props.channel.name}
                </li>
            </Link>

            </>
        );
    }
};

export default ChannelIndexItem;