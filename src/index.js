import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import TaskReact from './containers/TaskReact';
import TaskReactList from './containers/TaskReactList';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TaskReact />, document.getElementById('rootDemo'));
ReactDOM.render(<TaskReactList />, document.getElementById('rootList'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
