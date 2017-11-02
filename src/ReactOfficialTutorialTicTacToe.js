import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Prompt, Redirect, Switch, withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class ReactOfficialTutorialTicTacToe extends Component {
  render() {
    return (
      <div className="wrap">
        {/* react官网教程 */}
        <div className="react-official-tutorial-tic-tac-toe">
          <p>mine: </p>
          <TicTacToeMine /><hr/>
          <p>official: </p>
          <TicTacToe />
        </div>
      </div>
    );
  }
}

/* react官网教程 tic-tac-toe */
  // class Square extends React.Component {
  //   render() {
  //     return (
  //       <button onClick={() => this.props.click()} className="square">
  //         {this.props.value}
  //       </button>
  //     );
  //   }
  // }

  // mine
  function SquareMine(props){
    return (
      <button onClick={props.click} className="square">
        {props.value}
      </button>
    )
  }

  class BoardMine extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        squares: Array(9).fill(null), // 初始化一个包含9个空值的数组作为状态数据
        currPlayer: 'X',
        status: 'Next player: X',
        gameOver: false,
      }
    }

    handleClick = (i) => {
      if(this.state.squares[i] || this.state.squares.indexOf(null) == -1 || this.state.gameOver){
        return;
      }
      this.setState((prevState) => {
        // let newSquares = prevState.squares.slice();
        let newSquares = [...prevState.squares];
        newSquares[i] = prevState.currPlayer;
        let newState = {};
        newState.currPlayer = prevState.currPlayer == 'X'? 'O' : 'X';
        newState.squares = newSquares;
        if(this.ifGameOver(newSquares)){
          newState.status = `The winner is ${prevState.currPlayer}`;
          newState.gameOver = true;
        }else{
          newState.status = `Next player: ${newState.currPlayer}`;
        }
        return newState;
      });
    }

    ifGameOver(squares){
      let arr = squares;
      let horizontalKind = [0, 3, 6];
      let verticalKind = [0, 1, 2];
      for(let i = 0; i < horizontalKind.length; i++){
        if(arr[horizontalKind[i]] && arr[horizontalKind[i]] == arr[horizontalKind[i]+1] && arr[horizontalKind[i]] == arr[horizontalKind[i]+2]){
          return true;
        }
      }
      for(let j = 0; j < verticalKind.length; j++){
        if(arr[verticalKind[j]] && arr[verticalKind[j]] == arr[verticalKind[j]+3] && arr[verticalKind[j]] == arr[verticalKind[j]+6]){
          return true;
        }
      }
      if(arr[4] && ((arr[4] == arr[0] && arr[4] == arr[8]) || (arr[4] == arr[2] && arr[4] == arr[6]))){
        return true;
      }
      return false;
    }

    reset = () => {
      this.setState({
        squares: Array(9).fill(null), // 初始化一个包含9个空值的数组作为状态数据
        currPlayer: 'X',
        status: 'Next player: X',
        gameOver: false,
      });
    }

    renderSquare(i) {
      return (
        <SquareMine 
          value={this.state.squares[i]}
          click={() => this.handleClick(i)} />
      );
    }

    render() {
      const status = this.state.status;

      return (
        <div>
          <div className="status">{status}</div>
          <button onClick={this.reset}>reset</button>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  class TicTacToeMine extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <BoardMine />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  // 官方
  function Square(props){
    return (
      <button onClick={props.click} className="square">
        {props.value}
      </button>
    )
  }

  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  class Board extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        squares: Array(9).fill(null), // 初始化一个包含9个空值的数组作为状态数据
        xIsNext: true, // 下个落子方
      }
    }

    handleClick(i){
      const squares = this.state.squares.slice();
      if(calculateWinner(squares) || squares[i]) return;
      squares[i] = this.state.xIsNext? 'X' : 'O';
      this.setState({
        squares,
        xIsNext: !this.state.xIsNext,
      })
    }

    renderSquare(i) {
      return (
        <Square 
          value={this.state.squares[i]}
          click={() => this.handleClick(i)} />
      );
    }

    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner){
        status = 'Winner: ' + winner;
      }else{
        status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');
      }

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  class TicTacToe extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }


export default ReactOfficialTutorialTicTacToe