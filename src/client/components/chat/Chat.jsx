import React from 'react';
import { connect } from 'react-redux';

import { emit } from '~/client/actionCreators';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage = () => {
        emit({ type: `CHAT_MESSAGE`, message: this.refs.m.value });
        this.refs.m.value = ``;
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.messages.map((msg, i) => <li key={i}>{msg}</li>)}
                </ul>
                <input ref="m" autoComplete="off" />
                <button onClick={this.sendMessage}>Send</button>
            </div>
        );
    }
}

export default connect(state => state.chat)(Chat);
