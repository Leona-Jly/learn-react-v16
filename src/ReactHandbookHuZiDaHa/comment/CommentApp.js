import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from './wrapWithLoadData'

class CommentApp extends Component{
  static propTypes = {
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }
  constructor(props){
    super(props)
    this.state = {
      commentList: props.data
    }
  }
  componentWillMount(){
    let storageCommentList = this._getCommentList('commentList');
    if(storageCommentList){
      this.setState({commentList: JSON.parse(storageCommentList)});
    }else{
      this.setState({commentList: []})
    }
  }
  _saveCommentList(key, value){
    window.localStorage.setItem(key, value);
  }
  _getCommentList(key){
    return window.localStorage.getItem(key);
  }
  handleSubmit = (submitObj) => {
    if(!submitObj) return;
    let obj = {...submitObj};
    if(!obj.username){
      alert('请输入用户名');
      return;
    }
    if(!obj.content){
      alert('请输入评论内容');
      return;
    }
    let commentList = [...this.state.commentList];
    commentList.unshift(obj);
    this.setState({commentList});
    // this._saveCommentList('commentList', JSON.stringify(commentList));
    this.props.saveData(commentList);
  }
  handleDeleteComment = (id) => {
    function equalId(element){
      return element.id === id
    }
    let index = this.state.commentList.findIndex(equalId);
    let list = [...this.state.commentList];
    list.splice(index, 1);
    this.setState({commentList: list});
    // window.localStorage.setItem('commentList', JSON.stringify(list));
    this.props.saveData(list);
  }
  render(){
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmit}/>
        <CommentList
          list={this.state.commentList}
          onDeleteComment={this.handleDeleteComment}
        />
      </div>
    )
  }
}

CommentApp = wrapWithLoadData(CommentApp, 'commentList');
export default CommentApp


/*
 * 1. 组件的私有方法都用 _ 开头，所有事件监听的方法都用 handle 开头，把事件监听方法传给组件的时候，属性名用 on 开头；
 * 2. 记得对输入数据的过滤可放本组件内部处理，也可放父组件内处理；
 * 3. 记得处理不传入props时报错的情况，要增加defaultProps；
 * 4. 记得通过PropTypes给组件的参数做类型限制，可以在帮助我们迅速定位错误，这在构建大型应用程序的时候特别有用；另外，给组件加上 propTypes，也让组件的开发、使用更加规范清晰；
 * 5. 在blur的时候将username存入storage，而不是每次输入时；
 * 6. 在componentWillMount的时候就可以读取storage并修改state了，不用等到componentDidMount的时候；只有要用到dom元素的时候才放在componentDidMount中处理；
 * 7. 评论时间的处理，利用Math.round和Math.max：
    ```js
    componentWillMount(){
      this._updateTimeString();
      this._timer = setInterval(() => this._updateTimeString(), 5000);
    }

    componentWillUnmount(){
      clearInterval(this._timer);
      this._timer = null;
    }
    _updateTimeString = () => {
      let createdTime = this.props.comment.createdTime;
      let duration = (+new Date() - createdTime) / 1000; // 秒
      let timeString = duration > 60? `${Math.round(duration / 60)}分钟前` : `${Math.round(Math.max(duration, 1))}秒前`;
      this.setState({timeString});
    }
    ```
  * 8. 模仿markdown语法，将'``'之间的文字转为用'<code></code>'包裹，利用正则可以很快处理，另外要注意，要显示标签的话要放在react的dangerouslySetInnerHTML中，此时要防范xss攻击；
    ```
    _getProcessedContent = (content) => {
      // 防止xss漏洞，手动转义html标签
      return content
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;')
              .replace(/`([\S\s]+?)`/g, '<code>$1</code>'); // 将``转为<code></code>
    }
    render(){
      return (
        ...
        <p dangerouslySetInnerHTML={{
          __html: this._getProcessedContent(this.props.comment.content)
        }} />
        ...
      )
    }
    ```



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