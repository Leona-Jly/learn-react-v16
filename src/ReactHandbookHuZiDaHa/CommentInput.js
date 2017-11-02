import React, { Component } from 'react'

class CommentInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      content: '',
    }
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }
  handleContentChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit= () => {
    if(typeof this.props.onSubmit === 'function'){
      let {username, content} = this.state;
      if(!username){
        alert('请输入用户名');
        return;
      }
      if(!content){
        alert('请输入评论内容');
        return;
      }
      this.props.onSubmit({username, content});
    }
    this.setState({
      username: '',
      content: ''
    })
  }
  render(){
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange}
              type="text" />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange} />
          </div>
        </div>
        <div className="comment-field-button">
          {/*<button onClick={() => this.props.onSubmit(this.state)}>发布</button>*/}{/* 若直接传入state，就无法判断是否为空值 */}
          <button onClick={this.handleSubmit}>按钮</button>
        </div>
      </div>
    )
  }
}

export default CommentInput