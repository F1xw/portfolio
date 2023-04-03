import React from "react";
import './FwBackgroundAnimation.css';

class FwBackgroundAnimation extends React.Component {

    componentDidMount() {
        const background = document.getElementsByClassName("FwBackgroundAnimation")[0]
        this.listener = document.addEventListener("scroll", () => {
            const keyframes = {
                scale: 1+window.scrollY/4500
            }
            background.animate(keyframes, {
                duration: 200,
                fill: "forwards",
                easing: "ease"
            })
        })
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.listener)
    }

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
                    <li className="circle-box"></li>
                    <li></li>   
                </ul>
            </div>
        );
    }

}

export default FwBackgroundAnimation;