import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import TaskReact from './containers/TaskReact';
import TaskReactList from './containers/TaskReactList';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import Counter from './containers/Counter/Counter';
import ReduxTaskPerson from './store/reducers/ReduxTaskReduce'
import ReduxTask from './containers/ReduxTask/ReduxTask';


const rooteReducer = combineReducers({
    ctr: counterReducer,
    rs: resultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Dispatching]', action);
            const result = next(action);

            console.log('[Middleware] next state', store.getState())

            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rooteReducer, composeEnhancers(applyMiddleware(logger,thunk)));

const newStore = createStore(ReduxTaskPerson); 

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TaskReact />, document.getElementById('rootDemo'));
ReactDOM.render(<TaskReactList />, document.getElementById('rootList'));
ReactDOM.render(<Provider store={store}><Counter /></Provider>, document.getElementById('rootCounter'));
ReactDOM.render(<ReduxTask store={newStore}><Counter /></ReduxTask>, document.getElementById('rootPerson'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
