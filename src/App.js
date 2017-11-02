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
import ReactHandbookHuZiDaHa from './ReactHandbookHuZiDaHa/CommentApp'

class App extends Component {
  render() {
    return (
      <div className="wrap">
        {/* react官网示例 */}
        <ReactOfficialExamples />
        {/* 非react官网示例 */}
        <ReactNotOfficialExamples />
        {/* react-router官网core示例 */}
        <ReactRouterOfficialExamples />
        {/* react-router非官网dom示例 */}
        <ReactRouterNotOfficialExamples />
        {/* react官网教程 */}
        <ReactOfficialTutorialTicTacToe />
        {/* react小书 - 胡子大哈 */}
        <ReactHandbookHuZiDaHa />
      </div>
    );
  }
}

export default App;
