import React from 'react';
import Sidebar from './sidebar_container';
import { Route, Switch } from 'react-router-dom';
import ChannelContainer from '../channels/channel_container';

// class Main extends React.Component {

//     render () {
//         debugger
//         return (
//           <div>
//             <Switch>
//               {/* path="/main/channels/:channelId" */}
//               <Route path="/" component={ChannelContainer}
//               />
//             </Switch>
//           </div>
//         );
//     }
// };

const Main = (props) => {
    return (
      <div>
        <Route path={["/", "/main", "/main/channels/:channelId"]}
            component={Sidebar} />
        <Switch>
          <Route
            path="/main/channels/:channelId"
            component={ChannelContainer}
          />
        </Switch>
      </div>
    );
}

export default Main;