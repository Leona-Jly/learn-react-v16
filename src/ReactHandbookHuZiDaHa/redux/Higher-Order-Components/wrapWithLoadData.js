import React, { Component } from 'react'

export default (WrappedComponent, name) => {
  class NewComponent extends Component{
    constructor(){
      super()
      this.state = {
        data: ''
      }
    }
    componentWillMount(){
      let data = localStorage.getItem(name);
      if(!data) return;
      this.setState({ data });
    }
    render(){
      return <WrappedComponent name={this.state.data} />
    }
  }
  return NewComponent;
}

/*
 高阶组件是一个函数（而不是组件），它接受一个组件作为参数，返回一个新的组件。这个新的组件会使用你传给它的组件作为子组件。
 高阶组件的作用其实不言而喻，其实就是为了组件之间的代码复用。组件可能有着某些相同的逻辑，把这些逻辑抽离出来，放到高阶组件中进行复用。高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。
*/