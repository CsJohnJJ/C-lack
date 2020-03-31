import React from "react";
import { Link } from "react-router-dom";


class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        debugger
        let sessionLi;
         if (this.props.currentUser){
            sessionLi = (
              <li>
                <Link onClick={this.props.logout} className="nav-signup-link">
                  Log out
                </Link>
              </li>
            );
         }else{
            sessionLi = 
                <>
                <li>
                <Link className="nav-login-link" to="/login">
                    Sign In
                </Link>
                </li>
                <li>
                <Link className="nav-signup-link" to="/signup">
                    GET STARTED
                </Link>
                </li>
                </>

         }
           return (
             <nav className="navbar">
               <Link to="/" className="nav-main-link">
                 <img
                   src="https://image.flaticon.com/icons/svg/2111/2111615.svg"
                   className="logo-img"
                 />
                 <p className="logo-text">C-lack</p>
               </Link>
               <ul className="navbar-link">
                {sessionLi}
             
               </ul>
             </nav>
           );
    }
};

export default Navbar;
