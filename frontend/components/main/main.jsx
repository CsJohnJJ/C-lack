import React from 'react';
import Sidebar from './sidebar_container';
import { Route, Switch } from 'react-router-dom';
import ChannelContainer from '../channels/channel_container';

class Main  extends React.Component {

    render () {
        return (
            <div>
                <Switch>
                    <Route path="/main/channels/:channelId" component={ChannelContainer}/>
                </Switch>
            </div>
        )
    }
};

export default Main;