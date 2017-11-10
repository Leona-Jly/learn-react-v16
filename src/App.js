import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Prompt, Redirect, Switch, withRouter, NavLink } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

import ReactOfficialExamples from './ReactOfficialExamples'
import ReactNotOfficialExamples from './ReactNotOfficialExamples'
import ReactRouterOfficialExamples from './ReactRouterOfficialExamples'
import ReactRouterNotOfficialExamples from './ReactRouterNotOfficialExamples'
import ReactOfficialTutorialTicTacToe from './ReactOfficialTutorialTicTacToe'
import ReactHandbookHuZiComment from './ReactHandbookHuZiDaHa/comment/CommentApp'
import ReactHandbookHuZiInputWithUserName from './ReactHandbookHuZiDaHa/redux/Higher-Order-Components/InputWithUserName'
import ReactHandbookHuZiTextareaWithContent from './ReactHandbookHuZiDaHa/redux/Higher-Order-Components/TextareaWithContent'
import ReactHandbookHuZiInputWithUserNameWithAjax from './ReactHandbookHuZiDaHa/redux/Higher-Order-Components/InputWithUserNameWithAjax'

class App extends Component {
  render() {
    return (
      <div className="wrap">
        {/* react官网示例 */}
        {/*<ReactOfficialExamples /><hr/>*/}
        {/* 非react官网示例 */}
        {/*<ReactNotOfficialExamples /><hr/>*/}
        {/* react-router官网core示例 */}
        {/*<ReactRouterOfficialExamples /><hr/>*/}
        {/* react-router非官网dom示例 */}
        {/*<ReactRouterNotOfficialExamples /><hr/>*/}
        {/* react官网教程 */}
        {/* <ReactOfficialTutorialTicTacToe /><hr/> */}
        {/* react小书 - 胡子大哈 */}
        <ReactHandbookHuZiComment /><hr/>
        {/*用户名：<ReactHandbookHuZiInputWithUserName /><br/>
        内容：<ReactHandbookHuZiTextareaWithContent /><br/>*/}
        {/*<ReactHandbookHuZiInputWithUserNameWithAjax />*/}
      </div>
    );
  }
}

export default App;
