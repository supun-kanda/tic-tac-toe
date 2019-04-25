import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import calculateWinner from './util'

function Square(props){
    return (
        <button 
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component{

    renderSquare(i){
        return <Square 
            value={this.props.squares[i]}
            onClick={()=>this.props.onClick(i)}
        />;
    }
    render(){
        return (
            <div>
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

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history: [{squares:Array(9).fill(null)}],
            xIsNext: true,
            over: false
        };
    }

    clickHandle(i){
        if(this.state.over) return;

        const history = this.state.history,
        current = history[history.length-1],
        squares = current.squares.slice();        

        squares[i] = this.state.xIsNext?'X':'O';

        this.setState({
            history:history.concat([{squares:squares}]),
            xIsNext:!this.state.xIsNext
        });
    }

    render(){
        const history = this.state.history,
        current = history[history.length-1],
        winner = calculateWinner(current.squares);
        let status;

        if(winner){
            status = 'Winner: '+winner;
            this.state.over = true;
        }else
            status = 'Next Player: '+(this.state.xIsNext?'X':'O');

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        onClick={(i)=>this.clickHandle(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// Runing part

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);