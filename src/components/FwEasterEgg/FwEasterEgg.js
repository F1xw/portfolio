import React from "react";
import "./FwEasterEgg.scss";

class FwEasterEgg extends React.Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);

        this.state = {
            currentPlayer: "X",
            field: [
                "", "", "",
                "", "", "",
                "", "", ""
            ],
            gameHasFinished: false
        }
    }

    handleButtonClick(e) {
        console.log("Hello")
        let currentField = this.state.field;

        if (currentField[e.target.dataset.index] === "") {
            currentField[e.target.dataset.index] = this.state.currentPlayer;
        }

        let nextPlayer = this.state.currentPlayer === "O" ? "X" : "O"

        this.setState({
            field: currentField,
            currentPlayer: nextPlayer
        })
    }

    render() {
        return (
            <div className="FwEasterEgg container">
                <h2>Current Player: {this.state.currentPlayer} </h2>
                <div className="FwEasterEgg__field">
                    <button onClick={this.handleButtonClick} className="FwEasterEgg__field__button" data-index="0">{this.state.field[0]}</button>
                    <button className="FwEasterEgg__field__button">{this.state.field[1]}</button>
                    <button className="FwEasterEgg__field__button">{this.state.field[2]}</button>
                    <button className="FwEasterEgg__field__button">{this.state.field[3]}</button>
                    <button className="FwEasterEgg__field__button">{this.state.field[4]}</button>
                    <button className="FwEasterEgg__field__button">{this.state.field[5]}</button>
                    <button className="FwEasterEgg__field__button">{this.state.field[6]}</button>
                    <button className="FwEasterEgg__field__button">{this.state.field[7]}</button>
                    <button className="FwEasterEgg__field__button">{this.state.field[8]}</button>
                </div>
            </div>
        );
    }

}

export default FwEasterEgg;