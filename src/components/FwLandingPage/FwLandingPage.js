import React from 'react';
import FwLandingBubble from '../FwLandingBubble/FwLandingBubble';
import FwProfileBubble from '../FwProfileBubble/FwProfileBubble';
import "./FwLandingPage.css";

class FwLandingPage extends React.Component {

    render() {
        return <div className="content">
            <FwLandingBubble />
            <FwProfileBubble />
        </div>;
    }

}

export default FwLandingPage;