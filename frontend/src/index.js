import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app';
import reducers from './main/reducers'

import * as serviceWorker from './serviceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // para usar o plugin do redux

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
