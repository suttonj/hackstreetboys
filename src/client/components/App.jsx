import React, { Component } from 'react';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Checkbox from 'material-ui/Checkbox';

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

export default class App extends Component {

    state = {
        index: 0,
    }

    constructor(props) {
        super(props);
        this.handleChangeTabs = this.handleChangeTabs.bind(this);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
    }

    handleChangeTabs = value => {
        this.setState({
            index: value,
        });
    }

    handleChangeIndex = index => {
        this.setState({ index });
    }

    render() {
        const {
            index,
        } = this.state;

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Tabs value={index}>
                        <Tab label="Chat" value={0} onClick={() => this.handleChangeTabs(0)} />
                        <Tab label="Tools" value={1} onClick={() => this.handleChangeTabs(1)} />
                        <Tab label="Profile" value={2} onClick={() => this.handleChangeTabs(2)} />
                    </Tabs>
                    <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                        <div style={{ ...styles.slide, ...styles.slide1 }}>
                            Kyle: Said something
                        </div>
                        <div style={{ ...styles.slide, ...styles.slide2 }}>
                            <Checkbox label="test event propogation" />
                        </div>
                        <div style={{ ...styles.slide, ...styles.slide3 }}>
                            Name: Kyle Silberbauer
                        </div>
                    </SwipeableViews>
                </div>
            </MuiThemeProvider>
        );
    }
}
