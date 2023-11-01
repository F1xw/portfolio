import React from 'react';
import Cookies from 'js-cookies';
// import { FaChevronRight } from 'react-icons/fa';

import logo from './assets/svg/logo.svg';
import './App.scss';
import FwNavbar from './components/FwNavbar/FwNavbar';
import FwNavbarLink from './components/FwNavbar/FwNavbarLink/FwNavbarLink';
import FwInfoPanel from './components/FwInfoPanel/FwInfoPanel';

import FwLandingPage from './content/FwLandingPage/FwLandingPage';
import FwProjectsPage from './content/FwProjectsPage/FwProjectsPage';
import FwContactPage from './content/FwContactPage/FwContactPage';
import FwReferencesPage from './content/FwReferencesPage/FwReferencesPage';
import FwRandomLettersPrivacy from './content/FwRandomLettersPrivacy/FwRandomLettersPrivacy';

import FwBackgroundAnimation from './components/FwBackgroundAnimation/FwBackgroundAnimation';
import FwEasterEgg from './components/FwEasterEgg/FwEasterEgg';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "landing"
    }
    this.tabs = [
      "landing",
      "projects",
      "references",
      "contact",
      "easteregg",
      "apps/random-letters/privacy"
    ]
    this.handleTabClick = this.handleTabClick.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
    this.ActiveSite = this.ActiveSite.bind(this)
  }

  handleTabChange() {
    let setPath = window.location.pathname.endsWith("/") ? window.location.pathname.substring(1,window.location.pathname.length-1) : window.location.pathname.substring(1,window.location.pathname.length);
    console.log(setPath)
    if (setPath !== "/") {
      if (this.tabs.includes(setPath)) {
        this.setState({
          activeTab: setPath
        });
      }
    }else{
      this.setState({
        activeTab: "landing"
      });
    }
  }

  componentDidMount() {
    this.handleTabChange()
    window.onpopstate = () => {
      this.handleTabChange();
    };

    window.fw = {
      removeColorScheme: () => {
        Cookies.removeItem("fw_colorScheme");
        console.info("[Portfolio] Your color scheme has been reset. Media queries will now be used.");
      },
      setActiveTab: (tab) => {
        if (!this.tabs.includes(tab)) return false;
        this.setState({
          activeTab: tab
        });
      }
    }
  }

  handleTabClick (target) {
    if(target.startsWith("url:")) {
      window.location.assign("https://"+target.replace("url:", ""));
    }else{
      this.setState({
        activeTab: target
      });
  
      let newLocation = window.location.protocol + "//" + window.location.host + "/"+target + window.location.search;
      window.history.pushState({ path: newLocation }, '', newLocation);
    }
  }

  ActiveSite() {
    switch (this.state.activeTab) {
      case "landing":
        return <FwLandingPage />
      
      case "projects":
        return <FwProjectsPage />

      case "references":
        return <FwReferencesPage />
      
      case "contact":
        return <FwContactPage />

      case "easteregg":
        return <FwEasterEgg />

      case "apps/random-letters/privacy":
        return <FwRandomLettersPrivacy />
    
      default:
        return <FwLandingPage />
    }
  }

  render() {

    return (
      <div className="App">
        <FwBackgroundAnimation />
        <FwInfoPanel />
        <FwNavbar logo={logo}>
          <FwNavbarLink activeTabId={this.tabs.indexOf(this.state.activeTab)} id={0} onClick={this.handleTabClick} target="landing">About Me</FwNavbarLink>
          <FwNavbarLink activeTabId={this.tabs.indexOf(this.state.activeTab)} id={1} onClick={this.handleTabClick} target="projects">Projects</FwNavbarLink>
          <FwNavbarLink activeTabId={this.tabs.indexOf(this.state.activeTab)} id={2} onClick={this.handleTabClick} target="references">References</FwNavbarLink>
          <FwNavbarLink activeTabId={this.tabs.indexOf(this.state.activeTab)} id={3} onClick={this.handleTabClick} target="contact">Contact</FwNavbarLink>
          {/* <FwNavbarLink activeTabId={this.tabs.indexOf(this.state.activeTab)} id={3} onClick={this.handleTabClick} target="url:leokra.de"><FaChevronRight/> Tools</FwNavbarLink> */}
        </FwNavbar>
        <this.ActiveSite />
      </div> 
    );
  }
}

export default App;