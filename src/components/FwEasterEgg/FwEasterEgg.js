import React from "react";
import {FaRobot, FaUserFriends} from "react-icons/fa";
import "./FwEasterEgg.scss";

class FwEasterEgg extends React.Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.makeAiMove = this.makeAiMove.bind(this);

        this.state = {
            currentPlayer: "X",
            board: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            gameHasFinished: false,
            isAiMode: true,
        }
    }

    handleButtonClick(e) {
        if (this.state.gameHasFinished) return;

        if (this.state.board.findIndex(arr => arr.includes("")) === undefined) {
            this.setState({
                currentPlayer: ""
            });
            return;
        }

        if (this.state.isAiMode && this.state.currentPlayer !== "X") {
            return;
        }

        let currentBoard = this.state.board;
        let clickedField = e.target.dataset.index.split("");
        if (currentBoard[clickedField[0]][clickedField[1]] === "") {
            currentBoard[clickedField[0]][clickedField[1]] = this.state.currentPlayer;
            let nextPlayer = this.state.currentPlayer === "O" ? "X" : "O";
            this.setState({
                board: currentBoard
            });

            if (this.checkBoard(currentBoard)) {
                this.setState({
                    gameHasFinished: true
                });
                return;
            }

            this.setState({
                currentPlayer: nextPlayer
            });

            if (this.state.isAiMode) {
                this.makeAiMove();
            }
        }
    }

    checkBoard(b) {
        if (b[0].every(v => v === b[0][0]) && b[0][0] !== "") return true;
        if (b[1].every(v => v === b[1][0]) && b[1][0] !== "") return true;
        if (b[2].every(v => v === b[2][0]) && b[2][0] !== "") return true;
        
        if (b.every(v => v[0] === b[0][0]) && b[0][0] !== "") return true;
        if (b.every(v => v[1] === b[0][1]) && b[0][1] !== "") return true;
        if (b.every(v => v[2] === b[0][2]) && b[0][2] !== "") return true;

        if (b[0][0] === b[1][1] && b[1][1] === b[2][2] && b[1][1] !== "") return true;
        if (b[0][2] === b[1][1] && b[1][1] === b[2][0] && b[1][1] !== "") return true;

        return false;
    }

    makeAiMove() {
        // let boardAsString = this.state.board.reduce((last, curr) => {
        //     return last + curr.reduce((last, curr)   => {
        //         return curr === "" ? last + "-" : last + curr;
        //     });
        // });

        let boardAsString = "";

        this.state.board.forEach((row) => {
            row.forEach((field) => {
                boardAsString += field === "" ? "-" : field;
            });
        });

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com',
                'X-RapidAPI-Key': '3c564effe4mshc0f0451c799e2bfp1ea626jsnc29d83939909'
            }
        };
        
        fetch('https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/'+boardAsString+'/O', options)
            .then(response => response.json())
            .then((response) => {
                var i = response["recommendation"];
                var currentBoard = this.state.board;

                let row = Math.floor(i/3);
                let column = i%3;

                console.log(i);
                console.log(row+" "+column);

                currentBoard[row][column] = "O";
                this.setState({
                    board: currentBoard,
                });

                if(!this.checkBoard(currentBoard)) {
                    this.setState({
                        currentPlayer: "X",
                    });
                }else{
                    this.setState({
                        gameHasFinished: true,
                    });
                }
            })
            .catch(err => console.error(err));
    }

    render() {

        let winner = this.state.currentPlayer !== "" ? this.state.currentPlayer + " has won!" : "Draw!";
        let titleContent = this.state.gameHasFinished ? winner : "Next move: " + this.state.currentPlayer;
        
        return (
            <div className="FwEasterEgg container">
                <h2>{titleContent}</h2>
                <div className="FwEasterEgg__board">
                    <button onClick={this.handleButtonClick} className="FwEasterEgg__board__button" data-index="00">{this.state.board[0][0]}</button>
                    <button onClick={this.handleButtonClick} className="FwEasterEgg__board__button" data-index="01">{this.state.board[0][1]}</button>
                    <button onClick={this.handleButtonClick} className="FwEasterEgg__board__button" data-index="02">{this.state.board[0][2]}</button>
                    <button onClick={this.handleButtonClick} className="FwEasterEgg__board__button" data-index="10">{this.state.board[1][0]}</button>
                    <button onClick={this.handleButtonClick} className="FwEasterEgg__board__button" data-index="11">{this.state.board[1][1]}</button>
                    <button onClick={this.handleButtonClick} className="FwEasterEgg__board__button" data-index="12">{this.state.board[1][2]}</button>
                    <button onClick={this.handleButtonClick} className="FwEasterEgg__board__button" data-index="20">{this.state.board[2][0]}</button>
                    <button onClick={this.handleButtonClick} className="FwEasterEgg__board__button" data-index="21">{this.state.board[2][1]}</button>
                    <button onClick={this.handleButtonClick} className="FwEasterEgg__board__button" data-index="22">{this.state.board[2][2]}</button>
                </div>
                <div className="FwEasterEgg__settings">
                    <div className="FwEasterEgg__settings__modeSelector">
                        <FaRobot />
                        <FaUserFriends />
                    </div>
                </div>
            </div>
        );
    }

}

export default FwEasterEgg;