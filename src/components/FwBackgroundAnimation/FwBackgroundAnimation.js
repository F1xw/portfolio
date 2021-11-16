import React from "react";
import './FwBackgroundAnimation.css';

class FwBackgroundAnimation extends React.Component {

    render() {
        return (
            <div className="FwBackgroundAnimation">
                <ul className="FwBackgroundAnimation__list bg-animation-box">
                    <li className="circle-box" ></li>
                    <li className="corners-box-20" ></li>
                    <li className="circle-box" ></li>
                    <li className="corners-box-20" ></li>
                    <li></li>
                    <li className="corners-box-35" ></li>
                    <li className="circle-box" ></li>
                    <li></li>   
                </ul>
            </div>
        );
    }

}

export default FwBackgroundAnimation;