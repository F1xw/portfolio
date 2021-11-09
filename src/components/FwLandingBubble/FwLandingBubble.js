import React from 'react';
import FwButton from '../FwButton/FwButton';
import landingBubbleVector from '../../assets/bubbleLanding.svg'
import "./FwLandingBubble.css";

class FwLandingBubble extends React.Component {

    render() {
        return <div className="landingBubble">
                <img src={landingBubbleVector} />
                <div className="landingBubble__text">
                    <h1>Hello, my name is <br /><span>
                        <l>F</l><l>l</l><l>o</l><l>r</l><l>i</l><l>a</l><l>n</l>
                    </span></h1>
                    <FwButton>Next</FwButton>
                </div>
            </div>;
    }

}

export default FwLandingBubble;