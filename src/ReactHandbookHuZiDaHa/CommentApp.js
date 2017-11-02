import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      commentList: []
    }
  }
  handleSubmit = (submitObj) => {
    let obj = {...submitObj};
    let commentList = [...this.state.commentList];
    commentList.push(obj);
    this.setState({commentList});
  }
  render(){
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmit} />
        <CommentList list={this.state.commentList} />
      </div>
    )
  }
}

export default CommentApp


/*
 * 1. 记得统一变量名，传入的props若是处理函数，则加on前缀，如onSubmit等，类内部处理提交的函数，加handle前缀，如handleSubmit等；
 * 2. 对输入数据的过滤可放本组件内部处理，也可放父组件内处理，别忘了；
 * 3. 记得处理不传入props时报错的情况，要增加defaultProps；
 */