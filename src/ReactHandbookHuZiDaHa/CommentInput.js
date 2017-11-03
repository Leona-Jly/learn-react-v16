import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component{
  static propTypes = {
    onSubmit: PropTypes.func
  }
  constructor(props){
    super(props)
    this.state = {
      username: '',
      content: '',
      dangerousHTML: '<strong>This is a strong element - a dangerousHTML.</strong>'
    }
  }
  componentWillMount(){
    let storageUsername = window.localStorage.getItem('username');
    if(storageUsername){
      this.setState({username: JSON.parse(storageUsername)});
    }
  }
  componentDidMount(){
    this.textareaInput.focus();
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }
  _saveUsername(key, value){
    window.localStorage.setItem(key, value);
  }
  handleUsernameBlur = (e) => {
    this._saveUsername('username', JSON.stringify(e.target.value));
  }
  handleContentChange = (e) => {
    // 类似 Markdown 的行内代码块显示功能，用户输入的用 `` 包含起来的内容都会被处理成用 <code> 元素包含。例如输入 `console.log` 就会处理成 <code>console.log</code> 再显示到页面上。
    let value = e.target.value;
    // if(){

    // }
    this.setState({
      content: value
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
      let id = parseInt(Math.random()*999999);
      let createdTime = +new Date();
      this.props.onSubmit({username, content, id, createdTime});
    }
    this.setState({content: ''})
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
              onBlur={this.handleUsernameBlur}
              type="text" />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={(area) => this.textareaInput = area}
              value={this.state.content}
              onChange={this.handleContentChange} />
          </div>
        </div>
        <div className="comment-field-button">
          {/*<button onClick={() => this.props.onSubmit(this.state)}>发布</button>*/}
          <button onClick={this.handleSubmit}>按钮</button>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.state.dangerousHTML}}></div>
      </div>
    )
  }
}

export default CommentInput