import React from 'react';
import exampleProject from '../../assets/exampleProject.jpg';
import samcamProject from '../../assets/samcamProject.jpg';
import humcastProject from '../../assets/humcastProject.jpg';
import "./FwProjectsPage.css";

class FwProjectsPage extends React.Component {

    render() {
        return <div className="FwProjectsPage content">
            <div className="FwProjectsPage_projectContainer">
                <div className="FwProjectsPage__projectItem projectItem--long">
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Humcast</h1>
                        <hr />
                        <p>
                            Humcast is a podcast made by students at my school (Humboldt-Gymnasium Solingen). I took it upon myself to design (and manage) not only the logos and
                            cover arts or the Instagram page but the website aswell. I designed the graphics in a way, so that they would match across platforms. While this portfolio
                            was made using ReactJS I stuck with basic HTML, CSS and JS for the Humcast website. I used Material Design Bootstrap to assist me in alignment and responsiveness
                            and JQuery to ease my JavaScript workflow. I also wrote a tiny CMS for Humcast, so that they could easily rewrite the whole site without touching any code.
                            <br />
                            <br />
                            <p class="FwProjectsPage__projectItemLinks">
                                <a href="https://humcast.de" target="_blank" rel="noreferrer">Humcast Website</a>
                                &nbsp;•&nbsp; 
                                <a href="https://open.spotify.com/show/567asgppRfjg9ApKZ77IHH" target="_blank" rel="noreferrer">Humcast Spotify</a>
                            </p>
                        </p>
                    </div>
                    <div className="FwProjectsPage__projectItemImage">
                        <img src={humcastProject} alt="" />
                    </div>
                </div>
                <div className="FwProjectsPage__projectItem projectItem--tall">
                    <div className="FwProjectsPage__projectItemImage">
                        <img src={samcamProject} alt="" />
                    </div>
                    <div className="FwProjectsPage__projectItemText">
                        <h1>SamCam</h1>
                        <hr />
                        <p>
                            SamCam is a project that I made for my sisters birthday. I made an app using flutter to log data about my sister's hamster. I also used
                            a Raspberry Pi Zero and its camera component to create a security camera of some kind. It streams the camera's view to my server encrypted with SSL
                            and using SSH Tunnels to avoid port forwarding madness. For interaction between these two components I made an API using NodeJS and Express.
                            All in all this was my first IoT project and I enjoied the process of coding, desingning and building it.
                            <br />
                            <br />
                            <p class="FwProjectsPage__projectItemLinks">
                                <a href="https://github.com/F1xw/samcam" target="_blank" rel="noreferrer">GitHub Repo</a>
                                &nbsp;•&nbsp;
                                <a href="https://github.com/F1xw/samcam" target="_blank" rel="noreferrer">Pi Case</a>
                            </p>
                        </p>
                    </div>
                </div>
                <div className="FwProjectsPage__projectItem projectItem--tall">
                    <div className="FwProjectsPage__projectItemImage">
                        <img src={exampleProject} alt="" />
                    </div>
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Shareli.me</h1>
                        <hr />
                        <p>
                            This is an idea I came up with before knowing about WeTransfer. I wanted to transfer data from my Phone to my PC
                            or to my friends easily. Shareli.me was a file sharing website that alowed you to upload your file and get a link in return.
                            You could give this link to your friends or open it on your PC to simply download the file again. Shareli would host the file for a day
                            and delete it after. I planned on adding subscriptions for longer storage and custom links but then decided to take it down as the domain ran out
                            and I had security concerns about possible reverse shells or even just spamming.
                            <br />
                            <br />
                            <p class="FwProjectsPage__projectItemLinks">
                                <a href="https://github.com/F1xw/shareli.me" target="_blank" rel="noreferrer">GitHub Repo</a>
                            </p>
                        </p>                   
                    </div>
                </div>
                <div className="FwProjectsPage__projectItem">
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Small Projects</h1>
                        <hr />
                        <p>
                            I have made several small projects that don't deserve their own article. For example I made a script to sync my lights with my PC screen
                            because apparently Phillips Hue Entertainment only works on first party bulbs. Another example would be my Discord Bot that recommends Gucci products
                            when asked. I made this bot to learn the Discord Bot API for larger projects. I you want to see more, all of my projects are published on GitHub!
                            <br />
                            <br />
                            <p class="FwProjectsPage__projectItemLinks">
                                <a href="https://github.com/F1xw" target="_blank" rel="noreferrer">GitHub Profile</a>
                                &nbsp;•&nbsp;
                                <a href="https://github.com/F1xw/hue-pc-sync" target="_blank" rel="noreferrer">GitHub Light Sync</a>
                                &nbsp;•&nbsp;
                                <a href="https://github.com/F1xw/guccibot" target="_blank" rel="noreferrer">GitHub Gucci Bot</a>
                            </p>
                        </p>
                    </div>
                </div>
                <div className="FwProjectsPage__projectItem projectItem--long">
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Peer-to-Peer Chat</h1>
                        <hr />
                        <p>
                            This project was part of my paper on Peer-to-Peer networking. I created a 2 person chatroom to visualize the concept of Peer-to-Peer.
                            <br />
                            <br />
                            <p class="FwProjectsPage__projectItemLinks">
                                <a href="https://github.com/F1xw/p2p-chat" target="_blank" rel="noreferrer">GitHub Repo</a>
                            </p>
                        </p>
                    </div>
                    <div className="FwProjectsPage__projectItemImage">
                        <img src={exampleProject} alt="" />
                    </div>
                </div>
            </div>
        </div>;
    }

}

export default FwProjectsPage;