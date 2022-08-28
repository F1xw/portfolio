import React from 'react';
import FwButton from '../FwButton/FwButton';
import "./FwLandingBubble.scss";

class FwLandingBubble extends React.Component {

    scroll() {
        document.getElementById("about").scrollIntoView();
    }

    render() {
        return <div className="landingBubble FwMod-darkMode-bg">
                <div className="landingBubble__text">
                    <h1>Hi! My name is <br /><div className="landingBubble__text_letters">
                        <span>F</span><span>l</span><span>o</span><span>r</span><span>i</span><span>a</span><span>n</span>
                    </div></h1>
                    <FwButton onClick={this.scroll}>About Me</FwButton>
                </div>
            </div>;
    }

}

export default FwLandingBubble;