import React from 'react';
import "./FwNavbarLink.scss";

class FwNavbarLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: this.props.activeTabId };
        this.handleClick = this.handleClick.bind(this)
      }
  
  handleClick() {
    this.props.onClick(this.props.id, this.props.target)
  }

  componentDidUpdate(oldProps) {
    if (oldProps.activeTabId !== this.props.activeTabId) {
      this.setState({
        activeTab: this.props.activeTabId
      });
    }
  } 
    

  render() {
    let className = this.state.activeTab === this.props.id ? "FwNavbarLink active" : "FwNavbarLink"
    return <li className={className} onClick={this.handleClick}>
        <p className="FwNavbarLink__anchor">{this.props.children}</p>
    </li>;
  }
}

export default FwNavbarLink;