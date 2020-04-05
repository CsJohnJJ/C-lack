import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
      constructor(props) {
        super(props);
        this.toggleSelect = this.toggleSelect.bind(this);
    }

    toggleSelect(){
        let selected = document.getElementById(this.props.channel.name)
        if (selected.idList){
            selected.idList.toggle("selected")
        }
    }

    render(){
        return (
            <Link to={`/main/channels/${this.props.channel.id}`}  onClick={this.toggleSelect}>
                <li className="channelname-li" id={this.props.channel.name}>
                    <span># </span>
                    {this.props.channel.name}
                </li>
            </Link>
        );
    }
};

export default ChannelIndexItem;