import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { muiTheme, slide } from '~/shared/styles';

import Connecting from './Connecting';
import Chat from './Chat';
import Tools from './Tools';
import Profile from './Profile';

const styles = {
    slide1: {
        backgroundColor: `red`,
    },
    slide2: {
        backgroundColor: `yellow`,
    },
    slide3: {
        backgroundColor: `blue`,
    },
};

const tabToIndex = {
    chat: 0,
    tools: 1,
    profile: 2,
};

const swap = dict => {
    const ret = {};
    for (var key in dict) {
        ret[dict[key]] = key;
    }
    return ret;
};

class App extends Component {

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
        const createTabs = tabs => {
            return (
                <Tabs value={index}>
                { tabs.map(tab => 
                    <Tab label={tab} value={tabToIndex[tab]} onClick={setTab(tab)} />
                )}
                </Tabs>
            );
        };
        const indexToTab = swap(tabToIndex);
        const changeIndex = i => setTab(indexToTab[i])();

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    {createTabs([`chat`, `tools`, `profile`])}
                    <SwipeableViews index={index} onChangeIndex={changeIndex}>
                        <div style={{ ...slide, ...styles.slide1 }}>
                            <Chat />
                        </div>
                        <div style={{ ...slide, ...styles.slide2 }}>
                            <Tools />
                        </div>
                        <div style={{ ...slide, ...styles.slide3 }}>
                            <Profile />
                        </div>
                    </SwipeableViews>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(state => state)(App);
