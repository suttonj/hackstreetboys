'use strict';

import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import { users } from './reducers';

require.context('../static', true, /^\.\/.*\.svg/);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(combineReducers({ users }));

const styles = {
    leftHeader: {
        float: 'left',
    },
    rightHeader: {
        float: 'right',
        marginTop: '35px',
        marginRight: '15px',
    },
    centerModal: {
        border: '3px solid #73AD21',
        padding: '10px',
        width: '500px',
        height: '200px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        margin: '-100px 0 0 -250px',
    },
    centerAsset: {
        textAlign: 'center',
    },
    joinme_logo: {
        width: '100px',
        height: '100px',
        marginLeft: '15px',
    },
    centerHeader1: {
        textAlign: 'center',
        marginBottom:'20px',
    },
    emailHolder: {
        textAlign: 'center',
        marginBottom:'20px',
    },
    centerHeader2: {
        textAlign: 'center',
        marginBottom:'40px',
    },
    acceptUserHolder: {
        textAlign: 'center',
        marginBottom:'10px',
    },
    changeUserHolder: {
        textAlign: 'center',
    },
};


var SetupHeader = React.createClass({
    render: function() {
        return (
            <div>
                <div id="leftHeader" style={styles.leftHeader}>
                    <img id="joinme_logo" 
                        src="https://localhost:3000/build/joinme_logo.svg" 
                        style={styles.joinme_logo}>
                    </img>
                </div>
                <div id="rightHeader" style={styles.rightHeader}>
                    username@email.com
                </div>
            </div>
        );
    },
});

var SetupCenter = React.createClass({
    render: function() {
        return (
            <div id="centerModal" style={styles.centerModal}>
                <div id="centerHeader1" style={styles.centerHeader1}>
                    You are logged in as:
                </div>
                <div id="emailHolder" style={styles.emailHolder}>
                    username@email.com
                </div>
                <div id="centerHeader2" style={styles.centerHeader2}>
                    Is this the account you'd like to use to manage your join.me users?
                </div>
                <div id="acceptUserHolder" style={styles.acceptUserHolder}>
                    Use This Account
                </div>
                <div id="changeUserHolder" style={styles.changeUserHolder}>
                    Use a different account
                </div>
            </div>
        );
    },
});

var SetupPage = React.createClass({
    render: function() {
        return (
            <div id="setup-container">
                <SetupHeader />
                <SetupCenter />
            </div>
        );
    },
});


ReactDOM.render(
    <Provider store={store}>
        <SetupPage />
    </Provider>,
  document.getElementById('react-container')
);

export default connect(state => ({ ...state.users }))(SetupPage);
