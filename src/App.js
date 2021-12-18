import React from 'react';
import logo from './assets/logo.svg';
import './App.scss';
import FwNavbar from './components/FwNavbar/FwNavbar';
import FwNavbarLink from './components/FwNavbar/FwNavbarLink/FwNavbarLink';
import FwLandingPage from './components/FwLandingPage/FwLandingPage';
import FwProjectsPage from './components/FwProjectsPage/FwProjectsPage';
import FwContactPage from './components/FwContactPage/FwContactPage';
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
    this.ActiveSite = this.ActiveSite.bind(this)
  }

  componentDidMount() {
    if (window.location.pathname !== "/") {
      let setPath = window.location.pathname.replace("/", "");
      if (this.tabs.includes(setPath)) {
        this.setState({
          activeTab: setPath
        });
      }
    }

    // window.addEventListener('hashchange', function(){
    //   console.log("Location change")
    //   if (window.location.pathname !== "/") {
    //     let setPath = window.location.pathname.replace("/", "");
    //     if (this.tabs.includes(setPath) && setPath !== this.state.activeTab) {
    //       this.setState({
    //         activeTab: setPath
    //       });
    //     }
    //   }
    // });
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
