import React from "react";
import { Link, Redirect } from "react-router-dom";
import ChannelContainer from "../channels/channel_container";
import MainContainer from "../main/main_container";


const Greeting = ({ currentUser, logout }) => {
  const personalGreeting = () => {
    //  
    return (
      <div className="greeting-div">
        {/* <nav className="header-group">
        <h2 className="header-name">{currentUser.display_name} + </h2>
        <button className="header-button" onClick={logout}>
            Log Out
        </button>
        </nav> */}
        {/* <ChannelContainer /> */}
        <MainContainer />
      </div>
    )
  };

  return currentUser ? personalGreeting() : <Redirect to="/" />;
};

export default Greeting;
