import React from 'react';
import "./FwButton.css";

class FwButton extends React.Component {
  constructor(props) {
    super(props);
    this.processClick = this.processClick.bind(this)
  }

  processClick() {
    if (this.props.href !== undefined) {
      window.open(this.props.href, '_blank')
    }else if (this.props.onClick !== undefined) {
      this.props.onClick()
    }else{
      return false;
    }
  }


  render() {
    return <button onClick={this.processClick} className="FwButton">{this.props.children}</button>;
  }
}

export default FwButton;