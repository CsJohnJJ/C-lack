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
      <Route exact path={['/', '/login', '/signup']} component= {NavbarContainer} />
    </header>
    <Switch>
        <Route path="/main/channels/:channelId" component= {GreetingContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SplashContainer} />
        <ProtectedRoute exact path={["/main", "/main/channels/:channelId"]} component={ChannelContainer} />
    </Switch>
  </div>
);

export default App;
