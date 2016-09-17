import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';

import App from './components/App';

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers(reducers),
    {},
    compose(applyMiddleware(), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount')
);

// TODO: connecting logic, probably in actionCreator
setTimeout(() => store.dispatch({ type: `CONNECT_TO_MEETING` }), 3000);
