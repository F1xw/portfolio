import React from 'react';
import "./FwNavbar.css";

class FwNavbar extends React.Component {
  render() {
    return <div className="FwNavbar">
        <div className="FwNavbar__logo">
            <img src={this.props.logo} />
        </div>
        <ul className="FwNavbar__links">
            {this.props.children}
        </ul>
    </div>;
  }
}

export default FwNavbar;