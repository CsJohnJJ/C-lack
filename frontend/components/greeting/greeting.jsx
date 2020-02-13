import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const personalGreeting = () => {
    return (
        <nav className="header-group">
        <h2 className="header-name">{currentUser.display_name} + </h2>
        <button className="header-button" onClick={logout}>
            Log Out
        </button>
        </nav>
    )
  };

  return currentUser ? personalGreeting() : null;
};

export default Greeting;
