import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-main-link"> 
                <img src="https://image.flaticon.com/icons/svg/2111/2111615.svg" className="logo-img" />
                <p className="logo-text">C-lack</p>
            </Link>
            <ul className="navbar-link">
                <li><Link className="nav-login-link" to="/login">Sign In</Link></li>
                <li><Link className="nav-signup-link" to="/signup">GET STARTED</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;
