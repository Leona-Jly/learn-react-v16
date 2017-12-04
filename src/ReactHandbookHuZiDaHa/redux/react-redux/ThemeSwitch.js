import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super();
    this.state = {
      themeColor: ''
    }
  }

  componentWillMount() {
    const { store } = this.context;
    this._updateThemeColor();
    store.subscribe(() => this._updateThemeColor());
  }

  _updateThemeColor() {
    const { store } = this.context;
    const state = store.getState();
    this.setState({ themeColor: state.themeColor });
  }

  handleSwitchColor = (color) => { // dispatch action 去改变颜色
    const { store } = this.context;
    store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    });
  }

  render (){
    return (
      <div>
        <button
          style={{color: this.state.themeColor}}
          onClick={() => this.handleSwitchColor('pink')}
        >pink</button>
        <button
          style={{color: this.state.themeColor}}
          onClick={() => this.handleSwitchColor('lightgreen')}
        >lightgreen</button>
      </div>
    )
  }
}

export default ThemeSwitch