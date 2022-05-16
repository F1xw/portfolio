import React from 'react';
import Cookies from "js-cookies";
import "./FwNavbar.scss";
import {FaSun, FaMoon} from "react-icons/fa";
// import FwEasterEgg from '../FwEasterEgg/FwEasterEgg';

const dayInAYear = getDayInAYear();

class FwNavbar extends React.Component {

  constructor(props) {

    //? Set default values for state and pass component props to parent class
    super(props);
    this.state = {
      hiddenNav: false,
      prevScrollPos: 0,
      logoClickCounter: 0,
      navToggle: false,
      darkColorScheme: false
    }

    //? Bind "this" to these functions
    this.detectColorScheme = this.detectColorScheme.bind(this);
    this.toggleColorScheme = this.toggleColorScheme.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleNav = this.toggleNav.bind(this);

  }

  /*
  * Will be run on load.
  ? Adds an event listener for scrolling
  ? Runs the detector function to apply color schemes
  */
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.detectColorScheme()
  }
  
  /*
  ? Sets the color scheme
  ? Cookie will overwrite media query
  */
  detectColorScheme() {
    let cookie = Cookies.getItem("fw_colorScheme");
    if (cookie !== undefined) {
      if (cookie === "dark") this.toggleColorScheme();
      console.info("[Portfolio] Your preferred color scheme has been loaded. Any system wide color scheme settings will be overwritten. \n To unset use fw.removeColorScheme() or delete the fw_colorScheme cookie");
    }else{
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) this.toggleColorScheme();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (Cookies.getItem("fw__coloScheme")) return;
        this.setState({
          darkColorScheme: event.matches
        }); 
      });
    }
  }

  /*
  ! CSS unimplemented
  */
  handleScroll() {
    var hiddenNav;
    var currPos = document.documentElement.scrollTop;
    if (currPos <= 400) {
      hiddenNav = false
    }else if (this.state.prevScrollPos <= currPos) {
      hiddenNav = true
    }else{
      hiddenNav = false
    }
    this.setState({
      hiddenNav: hiddenNav,
      prevScrollPos: currPos
    });
  }

  //? Burgerham toggle function for mobile nav
  toggleNav() {
    this.setState({
      navToggle: this.state.navToggle ? false : true,
    })
  }

  //? Function that will run, if the color scheme button is pressed
  toggleColorScheme() {
    if (this.state.darkColorScheme) {
      this.setState({
        darkColorScheme: false
      });
      Cookies.setItem("fw_colorScheme", "light", dayInAYear, "/", "", true);
      document.body.classList.add("color-scheme--light");
      if (document.body.classList.contains("color-scheme--dark")) document.body.classList.remove("color-scheme--dark");
    }else{
      this.setState({
        darkColorScheme: true
      });
      Cookies.setItem("fw_colorScheme", "dark", dayInAYear, "/", "", true);
      document.body.classList.add("color-scheme--dark");
      if (document.body.classList.contains("color-scheme--light")) document.body.classList.remove("color-scheme--light");
    }
  }

  //? Renders the component
  render() {
    var navClassMod_hidden = this.state.hiddenNav ? "FwNavbar FwNavbar--hidden" : "FwNavbar";
    var navClassMod_active = navClassMod_hidden + (this.state.navToggle ? " active" : "");

    return <div className={navClassMod_active}>
        <div className="FwNavbar__logo">
            <img src={this.props.logo} alt="" />
        </div>
        <ul className="FwNavbar__links">
            {this.props.children}
        </ul>
        <div onClick={this.toggleNav} className="FwNavbar__burgerham"></div>
        <div className="FwNavbar__colorSwitcher" onClick={this.toggleColorScheme} title="Changes the color scheme">
          {this.state.darkColorScheme ? <FaSun /> : <FaMoon />}
        </div>
    </div>;
  }
}

function getDayInAYear() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  return new Date(year + 1, month, day);
}

export default FwNavbar;