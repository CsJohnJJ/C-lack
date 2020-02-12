import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => {
    return (
        <nav className="header-group">
        <h2 className="header-name">{currentUser.username} ^</h2>
        <button className="header-button" onClick={logout}>
            Log Out
        </button>
        </nav>
    )
  };

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
