import React from 'react';
import FwAboutMe from '../../components/FwAboutMe/FwAboutMe';
import FwLandingBubble from '../../components/FwLandingBubble/FwLandingBubble';
import FwProfileBubble from '../../components/FwProfileBubble/FwProfileBubble';
import FwSkills from '../../components/FwSkills/FwSkills';
import "./FwLandingPage.scss";

class FwLandingPage extends React.Component {

    render() {
        return (
        <div className="FwLandingPage">
            <div className="content" id="landing">
                <FwLandingBubble />
                <FwProfileBubble />
            </div>
            <div className="content" id="about">
                <FwAboutMe />
            </div>
            <div className="content" id="skills">
                <FwSkills />
            </div>
        </div>
        );
    }

}

export default FwLandingPage;