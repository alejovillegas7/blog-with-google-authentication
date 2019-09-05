import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; //applyMiddelware es el encargado de conectar thunk con redux
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';


const store= createStore(reducers, applyMiddleware(thunk));//conectando Middleware a redux store
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);