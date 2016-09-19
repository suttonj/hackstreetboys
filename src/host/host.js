const SonicSocket = require('~/shared/libs/sonic-socket');
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import * as reducers from './reducers';

import Host from './components/Host';

import {ALPHABET} from '~/shared/constants/audio';

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers(reducers),
    {},
    compose(applyMiddleware(), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

var audioContext = new AudioContext();
var MESSAGE = '1';

const ssocket = new SonicSocket({alphabet: ALPHABET, charDuration: 0.2 });
const sendMessage = () =>{
  ssocket.send(MESSAGE);
}

setInterval(sendMessage, 3000);

io().on(`EMITTED`, data => store.dispatch(data));

ReactDOM.render(
    <Provider store={store}>
        <Host />
    </Provider>,
    document.getElementById('mount')
);
