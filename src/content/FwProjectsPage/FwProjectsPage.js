import React from "react";
import samcamProject from "../../assets/projects/samcam.png";
import shareliProject from "../../assets/projects/shareli.png";
import p2pProject from "../../assets/projects/p2p-chat.png";
import FwProjectItem from "../../components/FwProjectItem/FwProjectItem";
import "./FwProjectsPage.scss";

const projects = [
  {
    title: "Random Letters",
    links: [
      {
        href: "https://apps.apple.com/us/app/random-letters-buchstabenrad/id6470997259",
        title: "App Store",
      },
      {
        href: "/apps/random-letters/privacy",
        title: "Privacy",
      },
    ],
    description: `Basic iOS App to generate random letters. Very little set of features at this point but I will add more in the future.`,
  },
  {
    title: "Nearvents",
    links: [
      {
        href: "https://github.com/nearvents",
        title: "GitHub Org",
      },
    ],
    description: `HIGHLY CONFIDENTIAL!!!<br />details about nearvents coming soon`,
  },
  {
    title: "Node HP Webscan",
    links: [
      {
        href: "https://github.com/F1xw/node-hp-webscan",
        title: "GitHub",
      },
    ],
    description: `For some reason HP requires users to create an account just to scan documents using one of their printers. Fortunatly some HP printers support the Webscan protocol.<br />
        This protocol uses regular HTTP request to start a scan and download the document. Node HP Webscan implements this protocol into Node JS. This package can be used to implement scanning into mobile applications or websites.`,
  },
  {
    title: "Morphing Cursor",
    links: [
      {
        href: "https://github.com/F1xw/morphing-cursor",
        title: "GitHub",
      },
    ],
    description: `Replaces the default cursor with a div element that morphs into interactable elements on hover. Can be customized with ease and help in making your website more unique.`,
  },
  {
    title: "Home Assistant",
    links: [
      {
        href: "https://github.com/F1xw/home-assistant-stuff",
        title: "GitHub",
      },
    ],
    description: `I am a huge fan of home automation and chose Home Assistant as my platform. Home Assistant supports custom automation blueprints and addons (if you run on bare metal).
        This repository contains my blueprints and addons to use with your own Home Assistant installation.`,
  },
  {
    title: "SamCam",
    image: samcamProject,
    links: [
      {
        href: "https://github.com/F1xw/samcam",
        title: "GitHub Repo",
      },
    ],
    description: `SamCam was a project I developed for my sistes birthday to allow her
            to monitor her pet hamster. It consists of an app written using
            Flutter and a Raspberry Pi Zero including a camera module. The app
            could be used to track the hamsters weight aswell as to view the
            live video footage of the Pi. After all a fun way to learn about app
            development and encryption for the video stream.`,
  },
  {
    title: "Shareli.me",
    image: shareliProject,
    links: [
      {
        href: "https://github.com/F1xw/shareli.me",
        title: "GitHub Repo",
      },
    ],
    description: `I came up with this idea because a file I wanted to share exceeded
            the size limits of WhatsApp. Shareli.me was a file sharing website
            that allowed you to upload your file and get a link in return. You
            could give this link to your friends or open it on your PC to
            download the uploaded file. Shareli would host files for a day and
            delete them afterwards. I planned on adding subscriptions for longer
            storage and custom links but then decided to take it down as the
            domain ran out and I had security concerns about possible reverse
            shells or spamming.`,
  },
  {
    title: "Peer-to-Peer Chat",
    image: p2pProject,
    links: [
      {
        href: "https://github.com/F1xw/p2p-chat",
        title: "GitHub Repo",
      },
    ],
    description: `This project was part of my technical paper on Peer-to-Peer
            networking that I had to write for school. I developed a 2-person
            chat using python to visualize the concept of p2p. As this project
            was a proof of concept for Peer-to-Peer, none of the data was
            encrypted so this project would be unsuited for real-world use.`,
  },
  {
    title: "Small Projects",
    links: [
      { href: "https://flowei.tech", title: "GitHub" },
      {
        href: "https://github.com/F1xw/portfolio",
        title: "Portfolio Repo",
      },
      {
        href: "https://github.com/F1xw/guccibot",
        title: "Gucci Bot Repo",
      },
    ],
    description: `Besides of all my larger projects there are several smaller projects
            published on GitHub. For example, a Discord Bot for recommending
            Gucci products and of course the code of this portfolio.`,
  },
];

class FwProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeIndex: null,
    };
  }

  handleClick(index) {
    if (this.state.activeIndex === index) {
      this.setState({
        activeIndex: null,
      });
    } else {
      this.setState({
        activeIndex: index,
      });
    }
  }

  render() {
    return (
      <div className="FwProjectsPage content">
        <div className="FwProjectsPage_projectContainer">
          {projects.map((e, i) => (
            <FwProjectItem
              index={i}
              activeIndex={this.state.activeIndex}
              clickHook={this.handleClick}
              project={e}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FwProjectsPage;
