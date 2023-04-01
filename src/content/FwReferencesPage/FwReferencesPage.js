import React from "react";
import anelloImage from "../../assets/references/anello.png"
import FwProjectItem from "../../components/FwProjectItem/FwProjectItem";
import "./FwReferencesPage.scss";

class FwReferencesPage extends React.Component {
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
      <div className="FwReferencesPage content">
        <div className="FwReferencesPage_projectContainer">
          <FwProjectItem
            index={0}
            activeIndex={this.state.activeIndex}
            clickHook={this.handleClick}
            project={{
              title: "Anello Steakhouse & Cocktailbar",
              image: anelloImage,
              links: [
                {
                  href: "https://anello-steakhouse.com",
                  title: "Website",
                },
              ],
            }}
          >
            Built using React and Next.js, this website reflects the mix of tradition and luxory of the Anello Steakhouse & Cocktailbar.
            With digitalization in mind, we've tried to streamline the online restaurant experience. The site will continue to adapt and evolve based on
            user feedback.
          </FwProjectItem>
        </div>
      </div>
    );
  }
}

export default FwReferencesPage;
