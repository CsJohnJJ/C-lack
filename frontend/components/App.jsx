import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SplashContainer from "./splash/splash_container"
import { AuthRoute, ProtectedRoute  } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import ChannelContainer from "./channels/channel_container";
import MainContainer from "./main/main_container";


const App = () => (
  <div className="main-div">
    <header>
        <AuthRoute path="/" component= {NavbarContainer} />
        <Route path="/" component= {GreetingContainer} />
    </header>
    <Switch>
        <AuthRoute path="/main" component={MainContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/channels/:channelId" component={ChannelContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
