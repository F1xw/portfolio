import React from 'react';
import exampleProject from '../../assets/exampleProject.jpg';
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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic in voluptas odio adipisci, modi quae quas obcaecati illo architecto fuga deleniti aut possimus magni ad, officiis iste? Provident, sequi?</p>
                    </div>
                    <div className="FwProjectsPage__projectItemImage">
                        <img src={humcastProject} alt="" />
                    </div>
                </div>
                <div className="FwProjectsPage__projectItem projectItem--tall">
                    <div className="FwProjectsPage__projectItemImage">
                        <img src={exampleProject} alt="" />
                    </div>
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Example Title</h1>
                        <hr />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic in voluptas odio adipisci, modi quae quas obcaecati illo architecto fuga deleniti aut possimus magni ad, officiis iste? Provident, sequi?</p>
                    </div>
                </div>
                <div className="FwProjectsPage__projectItem projectItem--tall">
                    <div className="FwProjectsPage__projectItemImage">
                        <img src={exampleProject} alt="" />
                    </div>
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Example Title</h1>
                        <hr />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic in voluptas odio adipisci, modi quae quas obcaecati illo architecto fuga deleniti aut possimus magni ad, officiis iste? Provident, sequi?</p>                   
                    </div>
                </div>
                <div className="FwProjectsPage__projectItem">
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Example Title</h1>
                        <hr />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic in voluptas odio adipisci, modi quae quas obcaecati illo architecto fuga deleniti aut possimus magni ad, officiis iste? Provident, sequi?</p>
                    </div>
                </div>
                <div className="FwProjectsPage__projectItem projectItem--long">
                    <div className="FwProjectsPage__projectItemText">
                        <h1>Example Title</h1>
                        <hr />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic in voluptas odio adipisci, modi quae quas obcaecati illo architecto fuga deleniti aut possimus magni ad, officiis iste? Provident, sequi?</p>
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