import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from 'react-modal';

import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '~/shared/styles/theme.sass';
import '~/shared/styles/tabs.sass';
import muiTheme from '~/shared/styles/muiTheme.js';

import { respondToHost } from '../actionCreators';

import Connecting from './Connecting';
import Chat from './chat/Chat';
import Tools from './tools/Tools';
import Profile from './profile/Profile';

const tabToIndex = {
    chat: 0,
    tools: 1,
    profile: 2,
};

const styles= {
  slide: {
    padding: 0,
    minHeight: 100,
    height: "100%",
  },
}

const swap = dict => {
    const ret = {};
    for (var key in dict) {
        ret[dict[key]] = key;
    }
    return ret;
};

class Client extends Component {

    render() {
        const {
            app,
            tabs,
        } = this.props;

        if (app.isConnecting) {
            return <Connecting />;
        }

        const index = tabToIndex[tabs.active];
        const setTab = tab => () => this.props.dispatch({ type: `SET_TAB`, tab });
        const createTabs = tabsToCreate => {
            return (
                <Tabs value={index}>
                { tabsToCreate.map(tab => 
                    <Tab label={tab} value={tabToIndex[tab]} onClick={setTab(tab)} />
                )}
                </Tabs>
            );
        };
        const indexToTab = swap(tabToIndex);
        const changeIndex = i => setTab(indexToTab[i])();

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className='app-container' >
                    {createTabs([`chat`, `tools`, `profile`])}
                    <SwipeableViews index={index} onChangeIndex={changeIndex} className='swipeable-view'>
                        <div>
                            <Chat />
                        </div>
                        <div>
                            <Tools />
                        </div>
                        <div>
                            <Profile />
                        </div>
                    </SwipeableViews>
                    <Modal isOpen={app.isModalOpen}>
                        <button onClick={() => this.props.dispatch(respondToHost(`yes`))}>Yes</button>
                        <button onClick={() => this.props.dispatch(respondToHost(`no`))}>No</button>
                    </Modal>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(state => state)(Client);
