import React from 'react';
import * as Scroll from 'react-scroll';
import FwButton from '../FwButton/FwButton';
import landingBubbleVector from '../../assets/bubbleLanding.svg'
import "./FwLandingBubble.scss";

class FwLandingBubble extends React.Component {

    scrollTo() {
        Scroll.animateScroll.scrollTo(window.innerHeight)
    }

    render() {
        return <div className="landingBubble">
                <img src={landingBubbleVector} alt="" />
                <div className="landingBubble__text">
                    <h1>Hi! My name is <br /><div className="landingBubble__text_letters">
                        <span>F</span><span>l</span><span>o</span><span>r</span><span>i</span><span>a</span><span>n</span>
                    </div></h1>
                    <FwButton onClick={this.scrollTo}>About Me</FwButton>
                </div>
            </div>;
    }

}

export default FwLandingBubble;