import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { App, Landing, About, Repos } from './components/App';

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers({
        routing: routerReducer,
    })
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Landing}/>
                <Route path="/about" component={About}/> 
                <Route path="/repos" component={Repos}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('mount')
);
