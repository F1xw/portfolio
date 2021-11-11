import React from "react";
import './FwBackgroundAnimation.css';

class FwBackgroundAnimation extends React.Component {

    render() {
        return (
            <div className="FwBackgroundAnimation">
                <ul className="FwBackgroundAnimation__list bg-animation-box">
                    <li class="circle-box" ></li>
                    <li class="corners-box-20" ></li>
                    <li class="circle-box" ></li>
                    <li class="corners-box-20" ></li>
                    <li></li>
                    <li class="corners-box-35" ></li>
                    <li class="circle-box" ></li>
                    <li></li>   
                </ul>
            </div>
        );
    }

}

export default FwBackgroundAnimation;