import React from "react";
import { Link } from "react-router-dom";
import Channel from "../channel/channel";

const Greeting = ({ currentUser, logout }) => {
  const personalGreeting = () => {
    return (
      <div>
        <nav className="header-group">
        <h2 className="header-name">{currentUser.display_name} + </h2>
        <button className="header-button" onClick={logout}>
            Log Out
        </button>
        </nav>
        {/* <Channel /> */}
      </div>
    )
  };

  return currentUser ? personalGreeting() : null;
};

export default Greeting;
