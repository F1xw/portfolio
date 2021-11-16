import React from 'react';
import reactDom from 'react-dom';
import Scroll from 'react-scroll';
import "./FwNavbar.scss";
import FwEasterEgg from '../FwEasterEgg/FwEasterEgg';


class FwNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hiddenNav: false,
      prevScrollPos: 0,
      logoClickCounter: 0,
      navToggle: false,
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll (e) {

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
    })

  }

  toggleNav() {
    this.setState({
      navToggle: this.state.navToggle ? false : true,
    })
  }

  scrollTo() {
    if (this.state.logoClickCounter === 7) {
      var temp = document.createElement("div");
      reactDom.render(<FwEasterEgg />, temp);
      document.body.innerHTML = temp.querySelector(".FwEasterEgg").outerHTML;
    }else{
      this.setState({
        logoClickCounter: this.state.logoClickCounter+1
      })
    }
    Scroll.animateScroll.scrollTo(0)
  }


  render() {

    var navClassMod_hidden = this.state.hiddenNav ? "FwNavbar FwNavbar--hidden" : "FwNavbar";
    var navClassMod_active = navClassMod_hidden + (this.state.navToggle ? " active" : "");

    return <div className={navClassMod_active}>
        <div onClick={this.scrollTo} className="FwNavbar__logo">
            <img src={this.props.logo} alt="" />
        </div>
        <ul className="FwNavbar__links">
            {this.props.children}
        </ul>
        <div onClick={this.toggleNav} className="FwNavbar__burgerham"></div>
    </div>;
  }
}

export default FwNavbar;