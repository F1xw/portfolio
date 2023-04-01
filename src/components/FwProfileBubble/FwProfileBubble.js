import React from 'react';
import profileImage from '../../assets/imageProfile.jpg'
import "./FwProfileBubble.scss";

class FwProfileBubble extends React.Component {

    render() {
        return <div className="profileBubble">
                <div className="profileBubble__img">
                    <img src={profileImage} alt="" />
                </div>
            </div>;
    }

}

export default FwProfileBubble;