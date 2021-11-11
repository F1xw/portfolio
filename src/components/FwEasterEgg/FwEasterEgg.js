import React from "react";
import easterEgg from "../../assets/easterEgg.bmp";
import "./FwEasterEgg.css";

class FwEasterEgg extends React.Component {

    render() {
        return (
            <div className="FwEasterEgg container">
                <img className="FwEasterEgg__egg" src={easterEgg} alt=""></img>
            </div>
        );
    }

}

export default FwEasterEgg;