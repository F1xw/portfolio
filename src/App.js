import logo from './logo.svg';
import './App.css';
import FwNavbar from './components/FwNavbar/FwNavbar';
import FwNavbarLink from './components/FwNavbar/FwNavbarLink/FwNavbarLink';
import FwLandingPage from './components/FwLandingPage/FwLandingPage';import React from 'react';
import FwProjectsPage from './components/FwProjectsPage/FwProjectsPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      activeSite: "landing"
    }
    this.handleTabClick = this.handleTabClick.bind(this)
    this.ActiveSite = this.ActiveSite.bind(this)
  }

  handleTabClick (id, target) {
    
    this.setState({
      activeTab: id,
      activeSite: target
    });
    console.log("Changed Tab!")
    console.log(id)
    console.log(this.state.activeTab)
  }

  ActiveSite() {
    switch (this.state.activeSite) {
      case "landing":
        return <FwLandingPage />
      
      case "projects":
        return <FwProjectsPage />
      
      case "contact":
        
        break;
    
      default:
        return <FwLandingPage />
    }
  }

  render() {
    return (
      <div className="App">
        <FwNavbar logo={logo}>
          <FwNavbarLink activeTabId={this.state.activeTab} id={0} onClick={this.handleTabClick} target="landing">Welcome</FwNavbarLink>
          <FwNavbarLink activeTabId={this.state.activeTab} id={1} onClick={this.handleTabClick} target="projects">Projects</FwNavbarLink>
          <FwNavbarLink activeTabId={this.state.activeTab} id={2} onClick={this.handleTabClick} target="landing">Contact</FwNavbarLink>
        </FwNavbar>
        <this.ActiveSite />
      </div>
    );
  }
}

export default App;
