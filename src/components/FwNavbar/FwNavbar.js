import React from 'react';
import Scroll from 'react-scroll';
import "./FwNavbar.css";


class FwNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hiddenNav: false,
      prevScrollPos: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll (e) {

    var hiddenNav;

    if (this.state.prevScrollPos <= document.documentElement.scrollTop) {
      hiddenNav = true
    }else{
      hiddenNav = false
    }

    this.setState({
      hiddenNav: hiddenNav,
      prevScrollPos: document.documentElement.scrollTop
    })

    console.log(document.documentElement.scrollTop)

  }

  scrollTo() {
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