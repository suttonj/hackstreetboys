const SonicServer = require('~/shared/libs/sonic-server');
import AudioConfig from '~/shared/constants/audio';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '~/shared/styles/theme.sass';
import '~/shared/styles/tabs.sass';
import muiTheme from '~/shared/styles/muiTheme.js';

import { respondToHost, setAvatar, setName } from '../actionCreators';

import Connecting from './Connecting';
import Chat from './chat/Chat';
import Tools from './tools/Tools';
import Profile from './profile/Profile';
import Poll from './tools/Poll';

const tabToIndex = {
    tools: 0,
    chat: 1,
    profile: 2,
};

const swap = dict => {
    const ret = {};
    for (var key in dict) {
        ret[dict[key]] = key;
    }
    return ret;
};

class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {code: '', sourceId: null};
        this.connectToMeeting = this.connectToMeeting.bind(this);
        this.updateCode = this.updateCode.bind(this);
        this.pickSource = this.pickSource.bind(this);

        this.sserver = new SonicServer(AudioConfig);
        this.sserver.on('message', this.connectToMeeting);
        this.sserver.on('character', this.updateCode)
    }

    pickSource(sourceId) {
        this.sserver.stop();
        this.sserver.start(sourceId);
    }

    connectToMeeting(message) {
        if (message.length == 0) { return; }
        this.sserver.stop();
        this.props.dispatch({ type: `CONNECT_TO_MEETING` });
    }

    updateCode(char) {
        let newCode = this.state.code + char;
        if (newCode.length == 3 || newCode.length == 7) {
            newCode += '-';
        }
        this.setState({code: newCode})
        if (newCode.length == 11) {
            setTimeout(()=>this.connectToMeeting(newCode), 10);
        }
    }

    render() {
        const {
            app,
            tabs,
            profile,
        } = this.props;

        if (app.isConnecting) {
            return <Connecting code={this.state.code} onClick={this.connectToMeeting} onSourceChanged={this.pickSource}/>;
        }

        const index = tabToIndex[tabs.active];
        const setTab = tab => () => this.props.dispatch({ type: `SET_TAB`, tab });
        const createTabs = tabsToCreate => {
            return (
                <Tabs value={index}>
                { tabsToCreate.map((tab, i) => 
                    <Tab key={i} label={tab} value={tabToIndex[tab]} onClick={setTab(tab)} />
                )}
                </Tabs>
            );
        };
        const indexToTab = swap(tabToIndex);
        const changeIndex = i => setTab(indexToTab[i])();

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className='app-container' onClick={this.connectToMeeting}>
                    {createTabs([`tools`, `chat`, `profile`])}
                    <SwipeableViews index={index} onChangeIndex={changeIndex}>
                        <div className='swipeable-view'>
                            <Tools />
                        </div>
                        <div className='swipeable-view'>
                            <Chat />
                        </div>
                        <div className='swipeable-view'>
                            <Profile 
                                data={profile} 
                                setAvatar={(imageUrl) => this.props.dispatch(setAvatar(imageUrl))}
                                setName={(name) => this.props.dispatch(setName(name))}
                                />
                        </div>
                    </SwipeableViews>
                    <Poll activePoll={app.activePoll}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(state => state)(Client);
