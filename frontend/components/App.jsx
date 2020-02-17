import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SplashContainer from "./splash/splash_container"
import { AuthRoute, ProtectedRoute  } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
// import ChatContainer from "./channel/ChatRoom"
import ChannelContainer from "./channel/channel_container";


const App = () => (
  <div className="main-div">
    <header>
        <AuthRoute path="/" component= {NavbarContainer} />
        <Route exact path="/" component= {GreetingContainer} />
    </header>
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/channel/:channelId" component={ChannelContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
