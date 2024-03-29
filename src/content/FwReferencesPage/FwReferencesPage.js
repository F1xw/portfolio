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
                  href: "https://anello-archive.flowei.tech/",
                  title: "Website",
                },
              ],
              description: `Built using React and Next.js, this website reflects the mix of tradition and luxory of 'Anello Steakhouse & Cocktailbar'.
              With digitalization in mind, we've tried to streamline the online restaurant experience. The site will continue to adapt and evolve based on
              user feedback. Due to unforeseen circumstances, Anello has now been closed.`
            }}
          />
          <FwProjectItem
            index={1}
            activeIndex={this.state.activeIndex}
            clickHook={this.handleClick}
            project={{
              title: "Taste of India",
              links: [
                {
                  href: "https://the-tasteofindia.com",
                  title: "Website",
                },
              ],
              description: `Taste Of India is a restaurant in Wuppertal, Germany focusing on tamil cuisine. To reflect their culture I chose saturated colors to match the traditional spices used.`
            }}
          />
        </div>
      </div>
    );
  }
}

export default FwReferencesPage;
