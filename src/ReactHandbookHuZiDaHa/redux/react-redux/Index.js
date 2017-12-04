import React, { Component} from 'react'
import PropTypes from 'prop-types';
import Header from './Header.js'
import Content from './Content.js'
import './css.css'

class Index extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return { store }
  }

  render (){
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

function createStore (reducer) {
  let state = null;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }
  dispatch(); // 初始化 state
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if(!state) return {
    themeColor: 'pink'
  }
  switch (action.type){
    case 'CHANGE_COLOR': 
      return {
        ...state,
        themeColor: action.themeColor
      };
    default:
      return state;
  }
}

const store = createStore(themeReducer);

export default Index