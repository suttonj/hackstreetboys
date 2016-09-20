import '../../shared/styles/theme.sass';
import React, { Component } from 'react';

import { emit } from '../actionCreators';

export default class PollResults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const yes = this.props.pollResults.yes;
        const no = this.props.pollResults.no;

        return(
            <div className="poll-results-container">
                 {yes} participants said yes. <br/>
                 {no} participants said no.
            </div>
        );
    }
}