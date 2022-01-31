import Square from "./Square"
import React from 'react'

//ternary statement to mimic AI as a ramdom algorithim? if player x clicks, then player O automatically fills the value.

//Board is the Parent Component, Square Component is the child Component.

class Board extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state ={
  //         squares: Array(9).fill(null),
  //         xIsNext: true,
  //     };
  // }

  renderSquare(i) {
    // console.log(this.props.winner)
    //   console.log(this.props.squares[i], i)
      return ( 
      <Square
      //ternary statement to disable squares, when you want it disabled when there is a winner and when you want it disabled if there is a value in the square. 
      disabled={this.props.winner? true : (this.props.squares[i]? true : false)}
      value={this.props.squares[i]}
      id={i} 
      winner = {this.props.winner?
      i === this.props.winner.tile1 ?
      true:
      i === this.props.winner.tile2 ?
      true:
      i === this.props.winner.tile3 ?
      true
      :false
      :false
      }
          onClick={() => this.props.onClick(i)}
      />
      );
  }

  //hardcoded renderSquares

render() {
  return(
      <div className="board">
      <div className='board-row'>
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

export default Board;
