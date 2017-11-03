import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      commentList: []
    }
  }
  componentWillMount(){
    let storageCommentList = this._getCommentList('commentList');
    if(storageCommentList){
      this.setState({commentList: JSON.parse(storageCommentList)});
    }
  }
  _saveCommentList(key, value){
    window.localStorage.setItem(key, value);
  }
  _getCommentList(key){
    return window.localStorage.getItem(key);
  }
  handleSubmit = (submitObj) => {
    let obj = {...submitObj};
    let commentList = [...this.state.commentList];
    commentList.unshift(obj);
    this._saveCommentList('commentList', JSON.stringify(commentList));
    this.setState({commentList});
  }
  handleDeleteComment = (id) => {
    function equalId(element){
      return element.id === id
    }
    let index = this.state.commentList.findIndex(equalId);
    let list = [...this.state.commentList];
    list.splice(index, 1);
    window.localStorage.setItem('commentList', JSON.stringify(list));
    this.setState({commentList: list});
  }
  render(){
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmit} />
        <CommentList
          list={this.state.commentList}
          onDeleteComment={this.handleDeleteComment} />
      </div>
    )
  }
}

export default CommentApp


/*
 * 1. 组件的私有方法都用 _ 开头，所有事件监听的方法都用 handle 开头，把事件监听方法传给组件的时候，属性名用 on 开头；
 * 2. 记得对输入数据的过滤可放本组件内部处理，也可放父组件内处理；
 * 3. 记得处理不传入props时报错的情况，要增加defaultProps；
 * 4. 记得通过PropTypes给组件的参数做类型限制，可以在帮助我们迅速定位错误，这在构建大型应用程序的时候特别有用；另外，给组件加上 propTypes，也让组件的开发、使用更加规范清晰；
 * 5. 在blur的时候将username存入storage，而不是每次输入时；
 * 6. 在componentWillMount的时候就可以读取storage并修改state了，不用等到componentDidMount的时候；
 * 7. 评论时间



组件的内容编写顺序如下：

1. static 开头的类属性，如 defaultProps、propTypes。
2. 构造函数，constructor。
3. getter/setter（还不了解的同学可以暂时忽略）。
4. 组件生命周期。
5. _ 开头的私有方法。
6. 事件监听方法，handle*。
7. render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
8. render() 方法。
 */