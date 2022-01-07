import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import samcamProject from '../../assets/samcamProject.jpg';
import humcastProject from '../../assets/humcastProject.jpg';
import shareliProject from '../../assets/shareliProject.jpg';
import p2pProject from '../../assets/p2pProject.jpg';
import "./FwProjectsPage.scss";

class FwProjectsPage extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            activeIndex: null
        }
    }


    handleClick(e) {
        if (this.state.activeIndex === e.target.dataset.index) {
            this.setState({
                activeIndex: null
            })
        }else{
            this.setState({
                activeIndex: e.target.dataset.index
            })
        }
    }

    render() {
        return <div className="FwProjectsPage content">
            <div className="FwProjectsPage_projectContainer">
                <div className={parseInt(this.state.activeIndex) === 0 ? "FwProjectsPage__projectItem active": "FwProjectsPage__projectItem"} onClick={this.handleClick} data-index={0}>
                    <FaChevronRight />
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Humcast</h1>
                        <hr />
                        <div className="FwProjectsPage__projectItemImage">
                            <img src={humcastProject} alt="" />
                        </div>
                        <p>
                        Humcast is a podcast made by students at my school (Humboldt-Gymnasium Solingen).
                        I have made it my ambition to design (and manage) not only the logos and cover arts or the Instagram page but the website as well.
                        While this portfolio was made using ReactJS I stuck with basic HTML, CSS and JS for the Humcast website
                        to allow future generations of students to change their site easily. I used a CSS Framework to assist me in alignment and
                        responsiveness and I used JQuery to ease my JavaScript development. I also coded a tiny CMS for Humcast,
                        so that they can change text and images without touching any code.
                            <br />
                            <br />
                            <p class="FwProjectsPage__projectItemLinks">
                                <a href="https://humcast.de" target="_blank" rel="noreferrer">Humcast Website</a>
                                &nbsp;•&nbsp; 
                                <a href="https://open.spotify.com/show/567asgppRfjg9ApKZ77IHH" target="_blank" rel="noreferrer">Humcast Spotify</a>
                            </p>
                        </p>
                    </div>
                </div>
                <div className={parseInt(this.state.activeIndex) === 1 ? "FwProjectsPage__projectItem active": "FwProjectsPage__projectItem"} onClick={this.handleClick} data-index={1}>
                    <FaChevronRight />
                    <div className="FwProjectsPage__projectItemText">
                        <h1>SamCam</h1>
                        <hr />
                        <div className="FwProjectsPage__projectItemImage">
                            <img src={samcamProject} alt="" />
                        </div>
                        <p>
                            SamCam is a project that I made as a gift for my sister’s birthday.
                            It consists of an IoT camera mounted inside of her hamster’s nagarium,
                            as well as an app that allowed her to log weight measurements and view a live feed from the above-mentioned camera.
                            It streams the camera's view to my server encrypted with TLS and using SSH Tunnels to avoid port forwarding madness.
                            For interaction between these two components, I designed an API using NodeJS and Express. All in all, this was my first IoT project and I
                            enjoyed the process of coding, designing and building it.
                            <br />
                            <br />
                            <p class="FwProjectsPage__projectItemLinks">
                                <a href="https://github.com/F1xw/samcam" target="_blank" rel="noreferrer">GitHub Repo</a>
                            </p>
                        </p>
                    </div>
                </div>
                <div className={parseInt(this.state.activeIndex) === 2 ? "FwProjectsPage__projectItem active": "FwProjectsPage__projectItem"} onClick={this.handleClick} data-index={2}>
                    <FaChevronRight />
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Shareli.me</h1>
                        <hr />
                        <div className="FwProjectsPage__projectItemImage">
                            <img src={shareliProject} alt="" />
                        </div>
                        <p>
                            I came up with this idea because a file I wanted to share exceeded the size limits of WhatsApp.
                            Shareli.me was a file sharing website that allowed you to upload your file and get a link in return.
                            You could give this link to your friends or open it on your PC to download the uploaded file. Shareli would host files for a day and delete them afterwards.
                            I planned on adding subscriptions for longer storage and custom links but then decided to take it down as the domain
                            ran out and I had security concerns about possible reverse shells or spamming.
                            <br />
                            <br />
                            <p class="FwProjectsPage__projectItemLinks">
                                <a href="https://github.com/F1xw/shareli.me" target="_blank" rel="noreferrer">GitHub Repo</a>
                            </p>
                        </p>                   
                    </div>
                </div>
                <div className={parseInt(this.state.activeIndex) === 3 ? "FwProjectsPage__projectItem active": "FwProjectsPage__projectItem"} onClick={this.handleClick} data-index={3}>
                    <FaChevronRight />
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Peer-to-Peer Chat</h1>
                        <hr />
                        <div className="FwProjectsPage__projectItemImage">
                            <img src={p2pProject} alt="" />
                        </div>
                        <p>
                        This project was part of my technical paper on Peer-to-Peer networking that I had to write for school. 
                        I developed a 2-person chat using python to visualize the concept of p2p. As this project was a proof of concept for Peer-to-Peer, 
                        none of the data was encrypted so this project would be unsuited for real-world use.
                            <br />
                            <br />
                            <p class="FwProjectsPage__projectItemLinks">
                                <a href="https://github.com/F1xw/p2p-chat" target="_blank" rel="noreferrer">GitHub Repo</a>
                            </p>
                        </p>
                    </div>
                </div>
                <div className={parseInt(this.state.activeIndex) === 4 ? "FwProjectsPage__projectItem no-active": "FwProjectsPage__projectItem"} onClick={this.handleClick} data-index={4}>
                    {/* <FaChevronRight /> */}
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Small Projects</h1>
                        <hr />
                        <p>
                        Besides of all my larger projects there are several smaller projects published on GitHub. For example, a Discord Bot for recommending Gucci products and of course the code of this portfolio. 
                            <br />
                            <br />
                            <p class="FwProjectsPage__projectItemLinks">
                                <a href="https://github.com/F1xw" target="_blank" rel="noreferrer">GitHub Profile</a>
                                &nbsp;•&nbsp;
                                <a href="https://github.com/F1xw/portfolio" target="_blank" rel="noreferrer">Portfolio Repo</a>
                                &nbsp;•&nbsp;
                                <a href="https://github.com/F1xw/guccibot" target="_blank" rel="noreferrer">Gucci Bot Repo</a>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>;
    }

}

export default FwProjectsPage;