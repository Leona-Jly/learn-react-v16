import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component{
  static propTypes = {
    list: PropTypes.array.isRequired,
    onDeleteComment: PropTypes.func
  }
  static defaultProps = { /* 防止 comments 不传入的情况 */
    list: []
  }
  handleDeleteComment = (id) => {
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(id);
    }
  }
  render(){
    return (
      <div>
        {/* {this.props.list.map((item, index) => (<Comment {...item} key={index} />))} */}
        {/* 传入list的整个item对象比拆分传入item更好 */}
        {this.props.list.map((item, index) => (
          <Comment 
            comment={item}
            key={index}
            onDeleteComment={this.handleDeleteComment} />
        ))}
      </div>
    )
  }
}

export default CommentList