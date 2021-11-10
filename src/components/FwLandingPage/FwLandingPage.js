import React from 'react';
import FwAboutMe from '../../FwAboutMe/FwAboutMe';
import FwLandingBubble from '../FwLandingBubble/FwLandingBubble';
import FwProfileBubble from '../FwProfileBubble/FwProfileBubble';
import "./FwLandingPage.css";

class FwLandingPage extends React.Component {

    render() {
        return (
        <div className="wrapper">
            <div className="content content--fullHeight">
                <FwLandingBubble />
                <FwProfileBubble />
            </div>
            <div className="content content--fullHeight">
                <FwAboutMe />
            </div>
        </div>
        );
    }

}

export default FwLandingPage;