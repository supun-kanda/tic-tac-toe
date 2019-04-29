import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Comment extends React.Component{
    render(){
        return(
            <div className='comment'>
                <p className='comment-user'>{this.props.user}</p>
                <p className='comment-body'>{this.props.body}</p>
                <p className='comment-date'>{this.props.date}</p>
            </div>
        );
    };
}

class CommentBox extends React.Component{
    constructor(){
        super();
        this.state = {
            showComments:false
        }
    }
    _handleClick(){
        this.setState({
            showComments : !this.state.showComments
        })
    }
    render(){
        let commentNodes,buttonText;
        if(this.state.showComments)
            buttonText = "Hide Comments"
        else
            buttonText = "Show Comments"
        const now = new Date();
        if(this.state.showComments){
            commentNodes = <div className='comment-list'>
            <Comment user='Supun' body='Like this' date={now.toDateString()}/>
            <Comment user='Nipun' body='Dislike this' date={now.toDateString()}/>
        </div>;
        }
        return(
            <div className='comment-box'>
                <h3>Comments</h3>
                <h4>lot of comments</h4>
                <button className='button' onClick={this._handleClick.bind(this)}>{buttonText}</button>
                {commentNodes}
            </div>
        );
    };
}

ReactDOM.render(
    <CommentBox/>,document.getElementById('root')
);