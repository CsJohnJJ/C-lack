import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     username: "",
        //     password: "",
        //     email: "",
        //     display_name: ""
        // };
        // this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    // handleDemoUser() {
    //     let user = { username: "demouser", password: "password" }
    //     this.props.processForm(user);
    // }

    render() {
        return (
            <div className="homepage-whole-div">            
                <div className="homepage-first-div">
                    <h1 className="homepage-main-text">
                    C-lack replaces email inside your company
                    </h1>
                    <p className="homepage-p-text">
                    Keep conversations organized in C-lack, the smart alternative to email
                    </p>
                    <ul className="homepage-link">
                    <Link className="try-c-link" to="/signup">TRY C-LACK</Link>
                    <Link className="try-demo-link" to="/login">TRY DEMO</Link>
                    </ul>
                    <p className="already-signup-text">
                    Already using C-lack? <Link className="already-signup" to="/login">Sign In</Link>
                    </p>
                </div>
            </div>
        )
    }
};

export default Splash;