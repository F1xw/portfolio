import React from 'react';
import FwAboutMe from '../FwAboutMe/FwAboutMe';
import FwLandingBubble from '../FwLandingBubble/FwLandingBubble';
import FwProfileBubble from '../FwProfileBubble/FwProfileBubble';
import FwSkills from '../FwSkills/FwSkills';
import alert from "../FwAlert/FwAlert";
import "./FwLandingPage.scss";

class FwLandingPage extends React.Component {

    componentDidMount() {
        setTimeout(() => {
          alert("The last touches", "I am almost finished creating my new portfolio. If you notice any bugs please send a message!", "danger");
        }, 3000);
      }

    render() {
        return (
        <div className="wrapper">
            <div className="content">
                <FwLandingBubble />
                <FwProfileBubble />
            </div>
            <div className="content">
                <FwAboutMe />
            </div>
            <div className="content">
                <FwSkills />
            </div>
        </div>
        );
    }

}

export default FwLandingPage;