import React from "react";
import reactDom from "react-dom";


class FwAlert extends React.Component {

    alert(text, type) {
        var alertContainer = document.createElement('div')
        reactDom.render(
            <FwAlert container={alertContainer} className={"FwAlert FwAlert--"+type}>{text}</FwAlert>,
            document.body.appendChild(alertContainer)
        )

    }

    render() {
        return (<h1>ssdsdasdsadasdasdasdasdasd</h1>);
    }

}

export default FwAlert.alert