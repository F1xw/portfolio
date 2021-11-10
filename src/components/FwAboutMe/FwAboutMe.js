import React from 'react';
import FwButton from '../FwButton/FwButton';
import * as Scroll from 'react-scroll';
import aboutMeBubble from '../../assets/bubbleAboutMe.svg';
import "./FwAboutMe.css";

class FwAboutMe extends React.Component {

    scrollTo() {
        Scroll.animateScroll.scrollTo(window.innerHeight*2)
    }

    render() {
        return (
            <div className="FwAboutMe" name="about">
                <img src={aboutMeBubble} alt="" />
                <div className="FwAboutMe__text">
                    <h1>About Me</h1>
                    <p>
                        I am an ongoing developer with skills in several different fields. I made coding my hobby and am developing programs and websites just for fun.
                        Currently, I am still attending school but I am aiming at finishing school in Q2 2022. I am looking forward to a job in IT as I really enjoy writing code.
                        I publish most of my work on <a href="https://github.com/F1xw" target="_blank" rel="noreferrer">GitHub</a> but my current problem is that I tend to start projects that are
                        way to overkill, so I almost never finish anything.
                        <br />
                        <br />
                        If you are interested in my skills, click the button below.
                        If you are interested in reading my paper on Peer-to-Peer Networking click <a href="/Facharbeit-Florian_Weissmeier.pdf">here</a> (written in german).
                    </p>
                    <FwButton onClick={this.scrollTo}>Next</FwButton>
                </div>
            </div>
        );
    }

}

export default FwAboutMe;