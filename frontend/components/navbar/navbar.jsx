import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-main-link">C-lack</Link>
            <a href="https://github.com/CsJohnJJ" className="github-link">Github</a>
            <a href="" className="linkedin-link">LinkedIn(no link)</a>
            <ul className="navbar-link">
                <li><Link className="nav-login-link" to="/login">Sign In</Link></li>
                <li><Link className="nav-signup-link" to="/signup">GET STARTED</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;
