import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square.js'
import Message from './Message.js'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        playerOne: "X",
        playerTwo: "O",
        currentTurn: "X",
        board: ["", "", "", "", "", "", "", "", ""],
        winCombo: [
          [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
        ],
        winner: "",
        message: "Tic Tac Toe Game!"
      }
}

  handleClick(index) {
    //console.log(index)
    if (this.state.board[index]==="") {
    var newBoard = this.state.board
    newBoard[index] = this.state.currentTurn

    this.setState({
      board:newBoard,
      currentTurn: this.state.currentTurn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne
    })

    this.winPlayer()
  }
}

  winPlayer() {
    for (let i=0; i<this.state.winCombo.length; i++) {
      if (this.state.board[this.state.winCombo[i][0]] === "X" && this.state.board[this.state.winCombo[i][1]] === "X" && this.state.board[this.state.winCombo[i][2]] === "X") {
        alert("Player One wins!")
        alert ("Game over!")
        this.setState({winner:"X"})
        this.resetGame();
      }
      if (this.state.board[this.state.winCombo[i][0]] === "O" && this.state.board[this.state.winCombo[i][1]] === "O" && this.state.board[this.state.winCombo[i][2]] === "O") {
        alert("Player Two wins!")
        alert ("Game over!")
        this.setState({winner:"O"})
        this.resetGame();
      }
    }
      if ((!this.state.board.includes('') && this.state.winner !== "X" && this.state.winner !== "O")) {
          alert("No one wins! Play again! :D ")
          this.setState({
            board: ["", "", "", "", "", "", "", "", ""]
          })
      }
    }

    resetGame() {

      this.setState({
        board: ["", "", "", "", "", "", "", "", ""]
      })

  }

  render() {
    return (
      <div className="board">
        <div className="square Square1" onClick={() => this.handleClick(0)}>
        {this.state.board[0]}
        </div>
        <div className="square Square2" onClick={() => this.handleClick(1)}>
        {this.state.board[1]}
        </div>
        <div className="square Square3" onClick={() => this.handleClick(2)}>
         {this.state.board[2]}
        </div>
        <div className="square Square4" onClick={() => this.handleClick(3)}>
        {this.state.board[3]}
        </div>
        <div className="square Square5" onClick={() => this.handleClick(4)}>
         {this.state.board[4]}
        </div>
        <div className="square Square6" onClick={() => this.handleClick(5)}>
         {this.state.board[5]}
        </div>
        <div className="square Square7" onClick={() => this.handleClick(6)}>
        {this.state.board[6]}
        </div>
        <div className="square Square8" onClick={() => this.handleClick(7)}>
        {this.state.board[7]}
        </div>
        <div className="square Square9" onClick={() => this.handleClick(8)}>
        {this.state.board[8]}
        </div>
        <div className="msg">
        <Message message={this.state.message}/>
        </div>
      </div>
    );
  }
}

  export default App;



  // {'.square'}.click(function () {
  //   $(this).html(playerOne);
  // });



  // var board = document.querySelector('.Box')
  // board.addEventListener('click', function(e) {
  //   e.target.innerHTML = currentTurn
  //   currentTurn = currentTurn === playerOne ? playerTwo : playerOne
  // });


  // <div className="square Square1" onClick={this.handleClick(cell, index)} mark ={this.state.board[0]}>
  // </div>
  // <div className="square Square2" onClick={this.handleClick} mark ={this.state.board[1]}>
  // </div>
  // <div className="square Square3" onClick={this.handleClick} mark ={this.state.board[2]}>
  // </div>
  // <div className="square Square4" onClick={this.handleClick} mark ={this.state.board[3]}>
  // </div>
  // <div className="square Square5" onClick={this.handleClick} mark ={this.state.board[4]}>
  // </div>
  // <div className="square Square6" onClick={this.handleClick} mark ={this.state.board[5]}>
  // </div>
  // <div className="square Square7" onClick={this.handleClick} mark ={this.state.board[6]}>
  // </div>
  // <div className="square Square8" onClick={this.handleClick} mark ={this.state.board[7]}>
  // </div>
  // <div className="square Square9" onClick={this.handleClick} mark ={this.state.board[8]}>
  // </div>



  // {this.state.board.map((element, index) => {
  //   return <div onClick= {() => this.handleClick(index)} className = "square"> {element} </div>
  // })}
  // </div>



  // winPlayer(index) {
  //   for (let i=0; i<this.state.winCombo.length; i++) {
  //     if (this.state.board[0] === "X" && this.state.board[1] === "X" && this.state.board[2] === "X") {
  //       alert("Player One wins!")
  //       return alert("Game over!")
  //     }
  //     if (this.state.board[0] === "O" && this.state.board[1] === "O" && this.state.board[2] === "O") {
  //       alert("Player Two wins!")
  //       return alert ("Game over!")
  //     }
  //   }
  // }


// Rules of React:
//
// 1. We never update state directly
// 2. We never update the DOM directly
// 3. Sibling components/elemnts should never share state - it should be paseed to them as props
// 4. You can never update props
// 5. Try to not have multiple this.setState({}) in a single action flow (including child functions)
// 6. When possible, assign all pieces of state you will use in a method/function to variables (destructuring is a handy pattern for this)
//
// message = "Player ${currentPlayer} has won"
