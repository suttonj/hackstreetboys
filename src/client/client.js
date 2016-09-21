import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import io from 'socket.io-client';

import * as reducers from './reducers';

import Client from './components/Client';

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers(reducers),
    {},
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

io().on(`EMITTED`, data => store.dispatch(data));

MediaStreamTrack.getSources(sources => {
    const audioSources = sources.filter(si => si.kind === `audio`);
    store.dispatch({ type: `SET_AUDIO_SOURCES`, audioSources });
});

      
ReactDOM.render(
    <Provider store={store}>
        <Client />
    </Provider>,
    document.getElementById('mount')
);
