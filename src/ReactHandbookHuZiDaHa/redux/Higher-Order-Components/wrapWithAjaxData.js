import React, { Component } from 'react'

export default (WrappedComponent) => {
  class NewComponent extends Component{
    constructor(){
      super()
      this.state = {
        data: null
      }
    }
    componentWillMount(){
      // ajax.get('/data/' + this.props.name, (data) => {
      //   this.setState({ data })
      // })
      let data = localStorage.getItem(this.props.name);
      this.setState({ data });
    }
    render(){
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent;
}