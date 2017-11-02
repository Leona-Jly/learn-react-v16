import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
// import whyDidYouUpdate from 'why-did-you-update';
import 'core-js/es6/map'; // core-js提供es6的Map和Set的polyfill
import 'core-js/es6/set';
import './index.css';
import './tic-tac-toe.css';
import './ReactHandbookHuZiDaHa/comment-practice.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// if (process.env.NODE_ENV !== 'production') {
//   whyDidYouUpdate(React)
// }

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
  <HashRouter>
  {/*<HashRouter hashType="noslash" forceRefresh keyLength={12}>*/}
    <App />
  </HashRouter>
), document.getElementById('root'));
registerServiceWorker();

