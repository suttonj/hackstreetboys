import React from 'react';

import Tabs from './Tabs';

export default class App extends React.Component {

    componentDidMount() {
        if (window.location.pathname === `/`) {
            setTimeout(() => window.location = `/chat`, 5000);
        }
    }

    render() {
        return (
            <div>
                { window.location.pathname !== `/` && <Tabs /> }
                {this.props.children}
            </div>
        );
    }
}
