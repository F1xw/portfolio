import React from 'react';
import Cookies from 'js-cookies';
import logo from './assets/logo.svg';
import './App.scss';
import FwNavbar from './components/FwNavbar/FwNavbar';
import FwNavbarLink from './components/FwNavbar/FwNavbarLink/FwNavbarLink';

import FwLandingPage from './content/FwLandingPage/FwLandingPage';
import FwProjectsPage from './content/FwProjectsPage/FwProjectsPage';
import FwContactPage from './content/FwContactPage/FwContactPage';

import FwBackgroundAnimation from './components/FwBackgroundAnimation/FwBackgroundAnimation';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "landing"
    }
    this.tabs = [
      "landing",
      "projects",
      "contact"
    ]
    this.handleTabClick = this.handleTabClick.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
    this.ActiveSite = this.ActiveSite.bind(this)
  }

  handleTabChange() {
    let setPath = window.location.pathname.replace("/", "");
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
    this.setState({
      activeTab: target
    });

    let newLocation = window.location.protocol + "//" + window.location.host + "/"+target + window.location.search;
    window.history.pushState({ path: newLocation }, '', newLocation);
  }

  ActiveSite() {
    switch (this.state.activeTab) {
      case "landing":
        return <FwLandingPage />
      
      case "projects":
        return <FwProjectsPage />
      
      case "contact":
        return <FwContactPage />
    
      default:
        return <FwLandingPage />
    }
  }

  render() {

    return (
      <div className="App">
        <FwBackgroundAnimation />
        <FwNavbar logo={logo}>
          <FwNavbarLink activeTabId={this.tabs.indexOf(this.state.activeTab)} id={0} onClick={this.handleTabClick} target="landing">About Me</FwNavbarLink>
          <FwNavbarLink activeTabId={this.tabs.indexOf(this.state.activeTab)} id={1} onClick={this.handleTabClick} target="projects">Projects</FwNavbarLink>
          <FwNavbarLink activeTabId={this.tabs.indexOf(this.state.activeTab)} id={2} onClick={this.handleTabClick} target="contact">Contact</FwNavbarLink>
        </FwNavbar>
        <this.ActiveSite />
      </div> 
    );
  }
}

export default App;