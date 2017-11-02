import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component{
  static defaultProps = { /* 防止 comments 不传入的情况 */
    list: []
  }
  render(){
    return (
      <div>
        {this.props.list.map((item, index) => (<Comment {...item} key={index} />))}
      </div>
    )
  }
}

export default CommentList