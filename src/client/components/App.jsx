import React from 'react';

import Header from './Header';

export default class App extends React.Component {

    componentDidMount() {
        if (window.location.pathname === `/`) {
            setTimeout(() => window.location = `/chat`, 5000);
        }
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}
