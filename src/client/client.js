import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory, useRouterHistory } from 'react-router';
import { createBrowserHistory } from 'history';

import * as reducers from './reducers';

import App from './components/App';
import Chat from './components/Chat';
import Tools from './components/Tools';
import Profile from './components/Profile';

// const browserHistory = useRouterHistory(createBrowserHistory)({
//     basename: `/client.html`,
// });

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers(reducers),
    {},
    compose(applyMiddleware(), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={browserHistory}>
            <Redirect from="/" to="chat" />
            <Route path="/" component={App}>
                <Route path="chat" component={Chat} />
                <Route path="tools" component={Tools} />
                <Route path="profile" component={Profile} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('mount')
);
