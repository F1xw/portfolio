import React from 'react';
import reactDom from 'react-dom';
import Scroll from 'react-scroll';
import "./FwNavbar.css";
import FwEasterEgg from '../FwEasterEgg/FwEasterEgg';


class FwNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hiddenNav: false,
      prevScrollPos: 0,
      logoClickCounter: 0,
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
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

    console.log(currPos)

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

    var navBarClassList = this.state.hiddenNav ? "FwNavbar FwNavbar--hidden" : "FwNavbar";


    return <div className={navBarClassList}>
        <div onClick={this.scrollTo} className="FwNavbar__logo">
            <img src={this.props.logo} alt="" />
        </div>
        <ul className="FwNavbar__links">
            {this.props.children}
        </ul>
    </div>;
  }
}

export default FwNavbar;