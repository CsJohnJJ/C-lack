import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homepage-div">
                <h1 className="homepage-main-text">
                C-lack replaces email inside your company
                </h1>
                <p className="homepage-p-text">
                Keep conversations organized in C-lack, the smart alternative to email
                </p>
                <ul className="homepage-link">
                <li><Link className="homepage-signup-link" to="/signup">TRY C-LACK</Link></li>
                <li><Link className="homepage-login-link" to="/login">TRY DEMO</Link></li>
                </ul>
                <p>
                Already using C-lack? <Link className="already-signup" to="/login">Sign In</Link>
                </p>
            </div>
 
        )
    }
};

export default Splash;