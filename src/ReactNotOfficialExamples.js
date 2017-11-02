import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Prompt, Redirect, Switch, withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class ReactNotOfficialExamples extends Component {
  render() {
    return (
      <div className="wrap">
        {/* 非react官网示例 */}
        <div className="react-not-official-examples">
          {/* <AjaxForGithub /> */}
        </div>
      </div>
    );
  }
}

/* 非react官网示例 */
  class AjaxForGithub extends React.Component{
    render(){
      return (
        <RepoList
            promise={fetch('https://api.github.com/search/repositories?q=javascript&sort=stars')}
          />
      )
    }
  }
  class RepoList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        loading: true,
        data: [],
        error: null
      }
    }
    componentDidMount(){
      // 使用fetch进行ajax请求
      this.props.promise.then((response) => {
          return response.json().then((data) => {
              console.log('data: ', data)
              this.setState({loading: false, data: data})
            }
          )
        }
      ).catch((error) => {
          console.log('error: ', error)
          this.setState({loading: false, error: JSON.stringify(error)})
        }
      );
    }
    render(){
      if(this.state.loading){
        return <p>loading...please wait</p>
      }else if(this.state.error){
        return <p>Error: {this.state.error}</p>
      }else if(this.state.data){
        let repos = this.state.data.items;
        let repoList = repos.map(item => {
          return (
            <li style={{textAlign: 'left'}} key={item.id}>
              <a href={item.html_url}>{item.name}</a> ({item.stargazers_count} stars): {item.description}
            </li>
          )
        });
        return (
          <main>
            <h4>Most Popular JavaScript Projects in Github</h4>
            <ol>{repoList}</ol>
          </main>
        )
      }else{
        return <p>no data...</p>
      }
    }
  }

export default ReactNotOfficialExamples