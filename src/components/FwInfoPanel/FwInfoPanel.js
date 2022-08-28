import React from 'react';
import "./FwInfoPanel.scss";

class FwInfoPanel extends React.Component {

    componentDidMount() {
        fetch('https://api.github.com/repos/F1xw/portfolio/commits/main')
            .then(response => response.json())
            .then((response) => {
                document.getElementById("infoPanel__commitId").innerHTML = "<b>"+response.sha+"</b>";
                document.getElementById("infoPanel__commitDate").innerHTML = "<b>"+response.commit.author.date+"</b>";
                document.getElementById("infoPanel__commitMsg").innerHTML = "<b>"+response.commit.message+"</b>";
            });
    }

    render() {
        return <div className="FwInfoPanel">
                <div className="FwInfoPanel__title">
                    <h1>F1xw/portfolio</h1>
                </div>
                <div className="FwInfoPanel__contents">
                    <div className="FwInfoPanel__githubInfo">
                        <ul>
                            <h3>Commit Info</h3>
                            <li>Commit ID: <span id="infoPanel__commitId"><i>loading</i></span></li>
                            <li>Commit date: <span id="infoPanel__commitDate"><i>loading</i></span></li>
                            <li>Commit message: <span id="infoPanel__commitMsg"><i>loading</i></span></li>
                        </ul>
                    </div>
                    <div className="FwInfoPanel__serverStats">
                        <ul>
                            <h3>Server</h3>
                            <li>Apache 2</li>
                            <li>Nginx Reverse Proxy</li>
                            <li>Ubuntu Server 20.04</li>
                        </ul>
                    </div>
                    <div className="FwInfoPanel__copyright">
                        Florian Weißmeier-Dörste &copy; 2022
                    </div>
                </div>
            </div>;
    }

}

export default FwInfoPanel;