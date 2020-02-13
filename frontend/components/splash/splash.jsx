import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homepage-whole-div">            
                <div className="homepage-first-div" >  
                    <video
                        src="https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_hero-video.mp4" type="video/mp4" 
                        id="rollingball" 
                        autoplay
                        loop
                    />

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

                <div className="homepage-2-div">
                    <h2 className="break-text">Break out of the inbox</h2>
                    <p className="working-text">
                        Working in channels gives everyone on your
                        team a shared view of progress and purpose.
                    </p>
                    <iframe src='https://www.youtube.com/embed/EYqxQGmQkVw'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='slackvideo'
                        className="slackvid"
                        /> 
                </div>

                <div className="homepage-3-div">
                    <div>
                        <img src="https://image.flaticon.com/icons/svg/1828/1828765.svg" className="shape-img"/>
                        <h3>Conversations, organized</h3>
                        <p>
                            Instead of a single overstuffed inbox,
                            conversations in Meep happen in dedicated
                            spaces called channels.
                        </p>
                    </div>
                    <div>
                        <img src="https://image.flaticon.com/icons/svg/2476/2476148.svg" className="news-img"/>
                        <h3>Get looped in, not out</h3>
                        <p>
                            Meep makes it simple to follow
                            conversations or find important information
                            in an easily searchable archive.
                        </p>
                    </div>
                    <div>
                        <img src="https://image.flaticon.com/icons/svg/1694/1694871.svg" className="hand-img"/>
                        <h3>Give focus a chance</h3>
                        <p>
                            Unlike email, Meep lets you choose
                            which conversations are most important
                            — and which can wait.
                        </p>
                    </div>
                </div>

                <div className="homepage-4-div">
                    <a href="https://github.com/CsJohnJJ"           className="github-link">
                        <img src="https://image.flaticon.com/icons/svg/2111/2111432.svg" className="github-img"/>
                        <p className="github-text">Github</p>
                        </a>
                    
                    <a href="" className="linkedin-link"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" className="linkedin-img"/>
                    <p className="linkedin-text">LinkedIn</p>
                    </a>
                </div>


                <div className="homepage-5-div">
                    <p className="better-text">Choose a better way to work</p>
                    <ul className="homepage-link">
                        <p>Contact Me</p>
                        <Link className="try-c-link-bottom" to="/signup">TRY C-LACK</Link>
                        <Link className="try-demo-link-bottom" to="/login">TRY DEMO</Link>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Splash;