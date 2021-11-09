import React from 'react';
import profileBubbleVector from '../../assets/bubbleProfile.svg'
import profileImage from '../../assets/imageProfile.bmp'
import "./FwProfileBubble.css";

class FwProfileBubble extends React.Component {

    render() {
        return <div className="profileBubble">
                <img src={profileBubbleVector} />
                <div className="profileBubble__img">
                    <img src={profileImage} alt="" />
                </div>
            </div>;
    }

}

export default FwProfileBubble;