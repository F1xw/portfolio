import React from 'react';
import FwButton from '../FwButton/FwButton';
import * as Scroll from 'react-scroll';
import aboutMeBubble from '../../assets/bubbleAboutMe.svg';
import "./FwAboutMe.scss";

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
                        I am 18 years old, living in Germany and currently working on my final school exams. Coding is a hobby for me, and I would like to turn this hobby into a career.
                        My skills range from basic HTML to cross-platform Apps using Flutter. I can maintain my own server to host various applications I made,
                        and I enjoy tinkering with other open-source software. Most of my work is published on <a href="https://github.com/F1xw" target="_blank" rel='noreferrer'>GitHub</a>, free to use for everyone.
                        If you are interested in reading my paper on Peer-to-Peer Networking (written in German) click <a href="/Facharbeit-Florian_Weissmeier.pdf" target="_blank" rel='noreferrer'>here</a>.
                        For a depiction of my skills please click on “Next”.
                    </p>
                    <FwButton onClick={this.scrollTo}>Next</FwButton>
                </div>
            </div>
        );
    }

}

export default FwAboutMe;