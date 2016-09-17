import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Checkbox from 'material-ui/Checkbox';

import Chat from './Chat';
import Tools from './Tools';
import Profile from './Profile';

const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: `black`,
    },
    slide1: {
        backgroundColor: `white`,
    },
    slide2: {
        backgroundColor: `white`,
    },
    slide3: {
        backgroundColor: `white`,
    },
};

const muiTheme = getMuiTheme({
    palette: {
        textColor: `black`,
        alternateTextColor: `black`,
        primary1Color: `white`,
        accent1Color: `darkgray`,
    },
});

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

    handleChangeIndex = index => {
        this.setState({ index });
    }

    render() {
        const index = tabToIndex[this.props.tab.active];
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
                        <Chat />
                        <Tools />
                        <Profile />
                    </SwipeableViews>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(state => state)(App);
