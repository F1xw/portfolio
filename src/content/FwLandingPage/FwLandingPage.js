import React from 'react';
import FwAboutMe from '../../components/FwAboutMe/FwAboutMe';
import FwLandingBubble from '../../components/FwLandingBubble/FwLandingBubble';
import FwProfileBubble from '../../components/FwProfileBubble/FwProfileBubble';
import FwSkills from '../../components/FwSkills/FwSkills';
import "./FwLandingPage.scss";

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