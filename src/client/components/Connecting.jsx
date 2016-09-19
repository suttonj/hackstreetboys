import React, { Component } from 'react';

export default class Connecting extends Component {
    render() {
        return (
            <h1 onClick={this.props.onClick}>Connecting...</h1>
        );
    }
}
