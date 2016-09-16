import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, useRouterHistory } from 'react-router';
import { createBrowserHistory } from 'history';

import * as reducers from './reducers';

import App from './components/App';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';

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
            <Route path="/" component={App}>
                <IndexRoute component={One}/>
                <Route path="/two" component={Two}/>
                <Route path="/three" component={Three}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('mount')
);
