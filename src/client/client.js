const SonicServer = require('~/shared/libs/sonic-server');
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import io from 'socket.io-client';

import * as reducers from './reducers';

import Client from './components/Client';

import {ALPHABET} from '~/shared/constants/audio';

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers(reducers),
    {},
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const sserver = new SonicServer({alphabet: ALPHABET});
const connected = false;
sserver.on('message', function(message) {
  // message is '31415'. Do something with it.
  if(confirm("Meeting ID received - connect to join.me Engage?")){
    sserver.stop();
    store.dispatch({ type: `CONNECT_TO_MEETING` });
  }
});
sserver.start();

io().on(`EMITTED`, data => store.dispatch(data));

ReactDOM.render(
    <Provider store={store}>
        <Client />
    </Provider>,
    document.getElementById('mount')
);
