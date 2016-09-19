import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emit } from '../actionCreators';

class Host extends Component {
    render() {
        const askQuestion = () => emit({ type: `SET_POLL`, activePoll: this.refs.question.value });
        return (
            <div>
                <input ref="question"/>
                <button onClick={askQuestion}>Ask question</button>
                { this.props.app.results }
            </div>
        );
    }
}

export default connect(state => state)(Host);
