import '../../shared/styles/theme.sass';
import '../../shared/styles/poll.sass';

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
                <div className="poll-results">
                    <div style={{textAlign: 'left'}}>
                        <span className="yes">{yes}</span> participants said <span className="yes">YES</span>.
                    </div>
                    <div style={{textAlign: 'left'}}>
                        <span className="no">{no}</span> participants said <span className="no">NO</span>.
                    </div>
                </div>
            </div>
        );
    }
}