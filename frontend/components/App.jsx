import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SplashContainer from "./splash/splash_container"
import { AuthRoute  } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container"


const App = () => (
  <div className="main-div">
    <header>
        <AuthRoute path="/" component= {NavbarContainer} />
        <Route excat path="/" component= {GreetingContainer} />
    </header>
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute excat path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
