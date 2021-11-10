import React from 'react';
import * as Scroll from 'react-scroll';
import FwButton from '../FwButton/FwButton';
import landingBubbleVector from '../../assets/bubbleLanding.svg'
import "./FwLandingBubble.css";

class FwLandingBubble extends React.Component {

    scrollTo() {
        Scroll.animateScroll.scrollTo(window.innerHeight+80)
    }

    render() {
        return <div className="landingBubble">
                <img src={landingBubbleVector} alt="" />
                <div className="landingBubble__text">
                    <h1>Hello, my name is <br /><span>
                        <l>F</l><l>l</l><l>o</l><l>r</l><l>i</l><l>a</l><l>n</l>
                    </span></h1>
                    <FwButton onClick={this.scrollTo}>Next</FwButton>
                </div>
            </div>;
    }

}

export default FwLandingBubble;