import React, { Component } from 'react'
import wrapWithLoadData from './wrapWithLoadData'
import wrapWithAjaxData from './wrapWithAjaxData'

class InputWithUserName extends Component{
  render(){
    return <input value={this.props.data} />
  }
}
InputWithUserName = wrapWithAjaxData(InputWithUserName)
InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')

export default InputWithUserName;

/*
  实际上最终得到的组件会先去 LocalStorage 取数据，然后通过 props.data 传给下一层组件，下一层用这个 props.data 通过 Ajax 去服务端取数据，然后再通过 props.data 把数据传给下一层，也就是 InputWithUserName。

  测试方法：在<ReactHandbookHuZiComment />渲染出来的用户名里填写'username'，输入评论内容后点确定，此时会在localStorage中存储key为'username'值也为'username'的记录，刷新页面后<ReactHandbookHuZiInputWithUserNameWithAjax />即会渲染出value为'username'的输入框，此'username'是通过值为'username'的this.props.name来向storage获取到的。
*/