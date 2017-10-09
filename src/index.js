import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import whyDidYouUpdate from 'why-did-you-update';
import 'core-js/es6/map'; // core-js提供es6的Map和Set的polyfill
import 'core-js/es6/set';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// if (process.env.NODE_ENV !== 'production') {
//   whyDidYouUpdate(React)
// }

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

