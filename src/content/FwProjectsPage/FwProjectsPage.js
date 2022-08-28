import React from 'react';
import samcamProject from '../../assets/avif/samcamProject.avif';
import shareliProject from '../../assets/avif/shareliProject.avif';
import p2pProject from '../../assets/avif/p2pProject.avif';
import FwProjectItem from '../../components/FwProjectItem/FwProjectItem';
import "./FwProjectsPage.scss";

class FwProjectsPage extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            activeIndex: null
        }
    }

    handleClick(index) {
        if (this.state.activeIndex === index) {
            this.setState({
                activeIndex: null
            })
        }else{
            this.setState({
                activeIndex: index
            })
        }
    }

    render() {
        return <div className="FwProjectsPage content">
            <div className="FwProjectsPage_projectContainer">
                <FwProjectItem
                    index={0}
                    activeIndex={this.state.activeIndex}
                    clickHook={this.handleClick}
                    project={
                        {title: "SamCam",
                        image: samcamProject,
                        links: [
                            {href: "https://github.com/F1xw/samcam", title: "GitHub Repo"}
                        ]}
                    }>
                    
                    I came up with this idea because a file I wanted to share exceeded the size limits of WhatsApp.
                    Shareli.me was a file sharing website that allowed you to upload your file and get a link in return.
                    You could give this link to your friends or open it on your PC to download the uploaded file. Shareli would host files for a day and delete them afterwards.
                    I planned on adding subscriptions for longer storage and custom links but then decided to take it down as the domain
                    ran out and I had security concerns about possible reverse shells or spamming.
                </FwProjectItem>
                <FwProjectItem
                    index={1}
                    activeIndex={this.state.activeIndex}
                    clickHook={this.handleClick}
                    project={
                        {title: "Shareli.me",
                        image: shareliProject,
                        links: [
                            {href: "https://github.com/F1xw/shareli.me", title: "GitHub Repo"}
                        ]}
                    }>
                    
                    I came up with this idea because a file I wanted to share exceeded the size limits of WhatsApp.
                    Shareli.me was a file sharing website that allowed you to upload your file and get a link in return.
                    You could give this link to your friends or open it on your PC to download the uploaded file. Shareli would host files for a day and delete them afterwards.
                    I planned on adding subscriptions for longer storage and custom links but then decided to take it down as the domain
                    ran out and I had security concerns about possible reverse shells or spamming.
                </FwProjectItem>
                <FwProjectItem
                    index={2}
                    activeIndex={this.state.activeIndex}
                    clickHook={this.handleClick}
                    project={
                        {title: "Peer-to-Peer Chat",
                        image: p2pProject,
                        links: [
                            {href: "https://github.com/F1xw/p2p-chat", title: "GitHub Repo"}
                        ]}
                    }>
                    
                    This project was part of my technical paper on Peer-to-Peer networking that I had to write for school. 
                    I developed a 2-person chat using python to visualize the concept of p2p. As this project was a proof of concept for Peer-to-Peer, 
                    none of the data was encrypted so this project would be unsuited for real-world use. 
                </FwProjectItem>
                <FwProjectItem
                    index={3}
                    activeIndex={this.state.activeIndex}
                    clickHook={this.handleClick}
                    project={
                        {title: "Small Projects",
                        links: [
                            {href: "https://flowei.tech", title: "GitHub"},
                            {href: "https://github.com/F1xw/portfolio", title: "Portfolio Repo"},
                            {href: "https://github.com/F1xw/guccibot", title: "Gucci Bot Repo"}
                        ]}
                    }>
                    
                    Besides of all my larger projects there are several smaller projects published on GitHub.
                    For example, a Discord Bot for recommending Gucci products and of course the code of this portfolio. 
                </FwProjectItem>
            </div>
        </div>;
    }

}

export default FwProjectsPage;