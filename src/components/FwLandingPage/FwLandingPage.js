import React from 'react';
import FwAboutMe from '../FwAboutMe/FwAboutMe';
import FwLandingBubble from '../FwLandingBubble/FwLandingBubble';
import FwProfileBubble from '../FwProfileBubble/FwProfileBubble';
import FwSkills from '../FwSkills/FwSkills';
import "./FwLandingPage.css";

class FwLandingPage extends React.Component {

    render() {
        return (
        <div className="wrapper">
            <div className="content">
                <FwLandingBubble />
                <FwProfileBubble />
            </div>
            <div className="content">
                <FwAboutMe />
            </div>
            <div className="content">
                <FwSkills />
            </div>
        </div>
        );
    }

}

export default FwLandingPage;