import React from "react";
import reactDom from "react-dom";
import {FaTimes} from "react-icons/fa";
import "./FwAlert.scss";


class FwAlert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isClosing: false,
        }
        this.closeSelf = this.closeSelf.bind(this)
    }

    closeSelf() {
        this.setState({
            isClosing: true,
        });
        setTimeout(() => {
            var closingAlerts = document.getElementsByClassName("FwAlert--closing");
            closingAlerts[0].remove();
        }, 1000);
    }

    render() {

        let isClosingMod = this.state.isClosing ? "FwAlert FwAlert--active FwAlert--closing" : "FwAlert";

        return (
            <div className={isClosingMod}>
                <div className="FwAlert__title">
                    {this.props.title}
                </div>
                <hr />
                <div className="FwAlert__body">
                    {this.props.children}
                </div>
                <div className="FwAlert__times">
                    <FaTimes onClick={this.closeSelf} />
                </div>
            </div>
        );
    }

}

function alert(title, text, type) {
    var alertContainer = document.createElement('div')
    reactDom.render(
        <FwAlert container={alertContainer} className={"FwAlert FwAlert--"+type} title={title}>{text}</FwAlert>,
        document.body.appendChild(alertContainer)
    )
    setTimeout(
        () => {
            alertContainer.firstChild.classList.add("FwAlert--active");
        }, 300
    )
}

export default alert